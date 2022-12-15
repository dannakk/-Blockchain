async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];r
}

async function loadContract() {
    return await new window.web3.eth.Contract([
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_buyerID",
                    "type": "string"
                },
                {
                    "name": "_name",
                    "type": "string"
                },
                {
                    "name": "_phone",
                    "type": "string"
                }
            ],
            "name": "createBuyer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_shopId",
                    "type": "string"
                }
            ],
            "name": "getDevicesInShop",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                }
            ],
            "name": "getBuyerFromDeviceId",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                },
                {
                    "name": "_shopId",
                    "type": "string"
                },
                {
                    "name": "_buyerId",
                    "type": "string"
                }
            ],
            "name": "setFirstBuyer",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_shopId",
                    "type": "string"
                },
                {
                    "name": "_shopName",
                    "type": "string"
                },
                {
                    "name": "_shopLocation",
                    "type": "string"
                }
            ],
            "name": "createShop",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                },
                {
                    "name": "_buyerId",
                    "type": "string"
                }
            ],
            "name": "makeStolen",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                }
            ],
            "name": "getDeviceIdDetails",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                }
            ],
            "name": "getShopOfDevice",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                },
                {
                    "name": "_oldBuyerId",
                    "type": "string"
                },
                {
                    "name": "_newBuyerId",
                    "type": "string"
                }
            ],
            "name": "changeOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                },
                {
                    "name": "_shopId",
                    "type": "string"
                }
            ],
            "name": "addShopToId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_buyerId",
                    "type": "string"
                }
            ],
            "name": "getBuyerFromBuyerId",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deviceId",
                    "type": "string"
                },
                {
                    "name": "_shopId",
                    "type": "string"
                },
                {
                    "name": "_brand",
                    "type": "string"
                },
                {
                    "name": "_model",
                    "type": "string"
                },
                {
                    "name": "_status",
                    "type": "uint256"
                },
                {
                    "name": "_color",
                    "type": "string"
                }
            ],
            "name": "createDeviceId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "shopId",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "shopName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "shopLocation",
                    "type": "string"
                }
            ],
            "name": "CreateShop",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "deviceId",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "shopId",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "brand",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "model",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "status",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "color",
                    "type": "string"
                }
            ],
            "name": "CreateDeviceId",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "brand",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "model",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "color",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "status",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "buyers",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "shopOfDevice",
                    "type": "string"
                }
            ],
            "name": "GetDeviceIdDetails",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "buyerId",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "phone",
                    "type": "string"
                }
            ],
            "name": "CreateBuyer",
            "type": "event"
        }
    ], '0x4a5763f7a6be1a45aad3c45d1b2e4615cffcb313');
}

async function load() {
    await loadWeb3();
    window.contract = await loadContract();
    updateStatus('Ready!');
}

async function createShop() {
    const shopId = document.getElementById("shopId").value;
    const shopName = document.getElementById("shopName").value;
    const shopLocation = document.getElementById("shopLocation").value;
    updateStatus('creating a shop...');
    const account = await getCurrentAccount();
    const createShopPromise = await window.contract.methods.createShop(shopId,shopName,shopLocation).send ({from: account});
    
    var returnedShopName = createShopPromise.events.CreateShop.returnValues.shopName;    
    updateStatus(returnedShopName + ' shop is created');
}

async function createDeviceId() {
    const deviceId = document.getElementById("deviceId").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const color = document.getElementById("color").value;
    const shopToAddDevice = document.getElementById("shopToAddDevice").value;

    updateStatus('creating a device...');
    const account = await getCurrentAccount();

    const createDevicePromise = await window.contract.methods.createDeviceId(deviceId,shopToAddDevice,brand,model,0,color).send
                                                                        ({from: account});
    updateStatus('device is created');

    var returnedDeviceId = createDevicePromise.events.CreateDeviceId.returnValues.deviceId;  
    var returnedDeviceBrand = createDevicePromise.events.CreateDeviceId.returnValues.brand;   
    var returnedDeviceModel = createDevicePromise.events.CreateDeviceId.returnValues.model;
    var returnedDeviceStatus = createDevicePromise.events.CreateDeviceId.returnValues.status;    
    var returnedShopId = createDevicePromise.events.CreateDeviceId.returnValues.shopId;    



    updateStatus('Device with ID '+ returnedDeviceId + ' of brand ' + returnedDeviceBrand + ' and status ' + returnedDeviceStatus + ' is added to shop ' + returnedShopId );
}

async function createBuyer() {
    const buyerId = document.getElementById("buyerId").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    updateStatus('adding a customer...');
    const account = await getCurrentAccount();

    const createBuyerPromise = await window.contract.methods.createBuyer(buyerId,name,phone).send
                                                                        ({from: account});
    var returnedBuyerId = createBuyerPromise.events.CreateBuyer.returnValues.buyerId;  
    var returnedBuyerName = createBuyerPromise.events.CreateBuyer.returnValues.name;   
    var returnedBuyerPhone = createBuyerPromise.events.CreateBuyer.returnValues.phone;    

    updateStatus(createBuyerPromise);
    updateStatus('Customer with ID '+ returnedBuyerId + ' with name ' + returnedBuyerName + ' is created');
}

async function addShopToId() {
    const shopIdToDevice = document.getElementById("shopIdToDevice").value;
    const deviceIdToDevice = document.getElementById("deviceIdToDevice").value;

    updateStatus('Linking device to the shop...');
    const account = await getCurrentAccount();

    const AddShopToIdPromise = await window.contract.methods.addShopToId(deviceIdToDevice,shopIdToDevice).send
                                                                        ({from: account});
    updateStatus('Device is linked to the shop');
}

async function setFirstBuyer() {
    const shopIdToCustomer = document.getElementById("shopIdToCustomer").value;
    const deviceIdToCustomer = document.getElementById("deviceIdToCustomer").value;
    const buyerIdToCustomer = document.getElementById("buyerIdToCustomer").value;


    updateStatus('Assigning the device to customer...');
    const account = await getCurrentAccount();

    const setFirstBuyerPromise = await window.contract.methods.setFirstBuyer(deviceIdToCustomer,shopIdToCustomer,buyerIdToCustomer).send({from: account});
    updateStatus('Device is assigner to the customer');

    
}

async function getShopOfDevice() {
    const deviceIdGetShop = document.getElementById("deviceIdGetShop").value;

    updateStatus('Finding the shop of the device...');
    const account = await getCurrentAccount();

    const getShopOfDevicePromise = await window.contract.methods.getShopOfDevice(deviceIdGetShop).call();
    updateStatus(`result is: ${getShopOfDevicePromise}`);
}


async function getDeviceIdDetails() {
    const deviceIdToCheckDetails = document.getElementById("deviceIdToCheckDetails").value;

    updateStatus('Finding the details about the device...');
    const account = await getCurrentAccount();

    const getDeviceIdDetailsPromise = await window.contract.methods.getDeviceIdDetails(deviceIdToCheckDetails).send({from: account});
    
    updateStatus(getDeviceIdDetailsPromise)
    var returnedBrand = getDeviceIdDetailsPromise.events.GetDeviceIdDetails.returnValues.brand;
    var returnedModel = getDeviceIdDetailsPromise.events.GetDeviceIdDetails.returnValues.model;
    var returnedColor = getDeviceIdDetailsPromise.events.GetDeviceIdDetails.returnValues.color;  
    var returnedBuyer = getDeviceIdDetailsPromise.events.GetDeviceIdDetails.returnValues.buyers;
    var returnedStatus = getDeviceIdDetailsPromise.events.GetDeviceIdDetails.returnValues.status;
    var returnedShop = getDeviceIdDetailsPromise.events.GetDeviceIdDetails.returnValues.shopOfDevice;



    updateStatus('Brand of device: '+ returnedBrand  + ' model of device ' + returnedModel + ' Color of device ' + returnedColor + ' buyers of device ' + returnedBuyer + ' status of device ' + returnedStatus + ' device bought in ' + returnedShop);

}

async function changeOwner() {
    const deviceIdToTransferOwnership = document.getElementById("deviceIdToTransferOwnership").value;
    const oldBuyerIdToTransferOwnership = document.getElementById("oldBuyerIdToTransferOwnership").value;
    const newBuyerIdToTransferOwnership = document.getElementById("newBuyerIdToTransferOwnership").value;


    updateStatus('Changing the owner of device...');
    const account = await getCurrentAccount();

    const changeOwnerPromise = await window.contract.methods.changeOwner(deviceIdToTransferOwnership,oldBuyerIdToTransferOwnership,newBuyerIdToTransferOwnership).send({from: account});
    updateStatus('Device owner is changed');
    
}

async function makeStolen() {
    const deviceIdToReportStolen = document.getElementById("deviceIdToReportStolen").value;
    const buyerIdToReportStolen = document.getElementById("buyerIdToReportStolen").value;


    updateStatus('Reporting the device as stolen device...');
    const account = await getCurrentAccount();

    const makeStolenPromise = await window.contract.methods.makeStolen(deviceIdToReportStolen,buyerIdToReportStolen).send({from: account});
    updateStatus('Device is reported as stolen');
    
}


async function updateStatus(status) {
    const statusEl = document.getElementById('status');
    statusEl.innerHTML = status;
    console.log(status);
}

load();
