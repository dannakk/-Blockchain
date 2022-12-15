pragma solidity ^0.4.22;
pragma experimental ABIEncoderV2;

contract Verify{

    struct shopObject{
        string name;
        string location;
    }

    struct deviceIdObject {
        uint status;
        string brand;
        string model;
        string color;
        string shop;
        string[] buyers;
    }

    struct buyerObject {
        string name;
        string phone;
        string[] deviceIds;
        bool isValue;
    }

    mapping (string => shopObject) shopArray;
    mapping (string => deviceIdObject) deviceIdArray;
    mapping (string => buyerObject) buyerArray;


    event CreateShop(
        string shopId,
        string shopName,
        string shopLocation
    );


    function createShop(string _shopId, string _shopName, string _shopLocation) public payable returns (uint) {
        shopObject newShop;
        newShop.name = _shopName;
        newShop.location = _shopLocation;
        shopArray[_shopId] = newShop;
        emit CreateShop(_shopId, _shopName, _shopLocation);
        return 1;
    }

    function getDevicesInShop(string _shopId) public view returns (string, string) {
        return (shopArray[_shopId].name, shopArray[_shopId].location);
    }

    function getShopOfDevice(string _deviceId) public view returns (string, string) {
        return (shopArray[deviceIdArray[_deviceId].shop].name, shopArray[deviceIdArray[_deviceId].shop].location);
    }

    event CreateDeviceId(
        string deviceId,
        string shopId,
        string brand,
        string model,
        uint status,
        string color
    );

    function createDeviceId(string _deviceId, string _shopId, string _brand, string _model, uint _status, string _color) public payable returns (uint) {
        deviceIdObject storage newDeviceId = deviceIdArray[_deviceId];
        newDeviceId.shop = _shopId;
        newDeviceId.brand = _brand;
        newDeviceId.model = _model;
        newDeviceId.status = _status;
        newDeviceId.color = _color;
        deviceIdArray[_deviceId] = newDeviceId;
        emit CreateDeviceId(_deviceId, _shopId, _brand, _model, _status, _color);
        return 1;
    }

    event GetDeviceIdDetails(
        string brand,
        string model,
        string color,
        uint status,
        string buyers,
        string shopOfDevice
    );

    string tempId;
    string deviceOwnerName;

    function getDeviceIdDetails(string _deviceId) public view returns (string, string, string, uint, string,string) {
        emit GetDeviceIdDetails(deviceIdArray[_deviceId].brand, deviceIdArray[_deviceId].model, deviceIdArray[_deviceId].color, deviceIdArray[_deviceId].status, buyerArray[deviceIdArray[_deviceId].buyers[0]].name, shopArray[deviceIdArray[_deviceId].shop].name);
        return (deviceIdArray[_deviceId].brand, deviceIdArray[_deviceId].model, deviceIdArray[_deviceId].color, deviceIdArray[_deviceId].status, buyerArray[deviceIdArray[_deviceId].buyers[0]].name, shopArray[deviceIdArray[_deviceId].shop].name);
    }

    function addShopToId(string _deviceId, string _shopId) public payable returns (uint) {
        deviceIdArray[_deviceId].shop = _shopId;
        return 1;
    }

    event CreateBuyer(
        string buyerId,
        string name,
        string phone
    );

    function createBuyer(string _buyerID, string _name, string _phone) public payable returns (bool) {
        //if (buyerArray[_buyerID].isValue) {
          //  return false;
        //}
        buyerObject newBuyer;
        newBuyer.name = _name;
        newBuyer.phone = _phone;
        newBuyer.isValue = true;
        buyerArray[_buyerID] = newBuyer;
        emit CreateBuyer(_buyerID, _name, _phone);
        return true;
    }

    function setFirstBuyer(string _deviceId, string _shopId, string _buyerId) public payable returns(bool) {
        uint i;
        if (compareStrings(deviceIdArray[_deviceId].shop, _shopId)) {       // Check if shop owns the device
            if (buyerArray[_buyerId].isValue) {                       // Check if buyer has an account
                deviceIdArray[_deviceId].buyers.push(_buyerId);               // Adding buyer to device
                deviceIdArray[_deviceId].status = 1;
                uint len = buyerArray[_buyerId].deviceIds.length;
                if(len == 0) {
                    buyerArray[_buyerId].deviceIds.push(_deviceId);
                    buyerArray[_buyerId].deviceIds.push("hack");
                } else {
                buyerArray[_buyerId].deviceIds[len-1] = _deviceId;
                buyerArray[_buyerId].deviceIds.push("hack");
                }
                return true;
            }
        }
            return false;
    }

    function compareStrings(string first, string second) internal returns (bool) {
    	return keccak256(first) == keccak256(second);
    }

    function getBuyerFromBuyerId(string _buyerId) public view returns (string, string) {
        return (buyerArray[_buyerId].name, buyerArray[_buyerId].phone);
    }

    function getBuyerFromDeviceId(string _deviceId) public view returns (string) {
        return (buyerArray[deviceIdArray[_deviceId].buyers[0]].name);

    }

    function makeStolen(string _deviceId, string _buyerId) public payable returns (bool) {
        uint i;
        // Check if account exists
        if (buyerArray[_buyerId].isValue) {
            // Check if this ID is the owner
            for (i = 0; i < buyerArray[_buyerId].deviceIds.length; i++) {
                if (compareStrings(buyerArray[_buyerId].deviceIds[i], _deviceId)) {
                    deviceIdArray[_deviceId].status = 2;        // Change the status to "2" or stolen
                }
                return true;
            }
        }
        return false;
    }

    function changeOwner(string _deviceId, string _oldBuyerId, string _newBuyerId) public payable returns (bool) {
        uint i;
        bool flag = false;
        //Creating objects for deviceId, previous customer, newCustomer
        deviceIdObject memory product = deviceIdArray[_deviceId];
        uint len_product_customer = product.buyers.length;
        buyerObject memory oldCustomer = buyerArray[_oldBuyerId];
        uint len_oldCustomer_code = buyerArray[_oldBuyerId].deviceIds.length;
        buyerObject memory newCustomer = buyerArray[_newBuyerId];

        //Check if both have an account
        if (oldCustomer.isValue && newCustomer.isValue) {
            //Check if oldCustomer is owner
            for (i = 0; i < len_oldCustomer_code; i++) {
                if (compareStrings(oldCustomer.deviceIds[i], _deviceId)) {
                    flag = true;
                    break;
                }
            }

            if (flag == true) {
                //Swaping the owners
                for (i = 0; i < len_product_customer; i++) {
                    if (compareStrings(product.buyers[i], _oldBuyerId)) {
                        deviceIdArray[_deviceId].buyers[i] = _newBuyerId;
                        break;
                    }
                }

                // Delete device from previous owner
                for (i = 0; i < len_oldCustomer_code; i++) {
                    if (compareStrings(buyerArray[_oldBuyerId].deviceIds[i], _deviceId)) {
                        remove(i, buyerArray[_oldBuyerId].deviceIds);
                        // Assigning device to new owner
                        uint len = buyerArray[_newBuyerId].deviceIds.length;
                        if(len == 0){
                            buyerArray[_newBuyerId].deviceIds.push(_deviceId);
                            buyerArray[_newBuyerId].deviceIds.push("hack");
                        } else {
                            buyerArray[_newBuyerId].deviceIds[len-1] = _deviceId;
                            buyerArray[_newBuyerId].deviceIds.push("hack");
                        }
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function remove(uint index, string[] storage array) internal returns(bool) {
        if (index >= array.length)
            return false;

        for (uint i = index; i < array.length-1; i++) {
            array[i] = array[i+1];
        }
        delete array[array.length-1];
        array.length--;
        return true;
    }

    
}
