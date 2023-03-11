import { Contract, ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constant.js"
//in nodejs willcuse require to immport depenecies
//but in frontend javascript you cant use require so we use import keyword
const connectButton = document.getElementById("connectButton")
const fundButton = document.getElementById("fundButton")
connectButton.onclick = connect
fundButton.onclick = fund

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await ethereum.request({ method: "eth_requestAccounts" })
        } catch (error) {
            console.log(error)
        }
        connectButton.innerText = "connected"
    } else {
        connectButton.innerText = "Install metamask"
    }
}
async function fund() {
    const ethAmount = "0.1"
    console.log(`funding Contract ${ethAmount}`)
    if (typeof window.ethereum !== "undefined") {
        //conection to the blockchain / providers
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        //getsigner/someone gas fee/wallet
        const signer = provider.getSigner()
        //contra    ct we re iteracting with
        //^ we need the ABI and address of the contract
        const contract = new ethers.Contract(contractAddress, abi, signer)
        const transactionResponse = contract.fund({
            value: ethers.utils.parseEther(ethAmount),
        })
    }
}
