import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types"

const deploysimpleContract: DeployFunction = async function 
(hre:HardhatRuntimeEnvironment)
{
    const { getNamedAccounts, deployments, network } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    log("Deploying Simple Contract ...");
    const SimpleContract = await deploy("simpleContract", {
        from: deployer,
        args: [],
        log: true,
    });
    log(`Deployed simple contract to address ${SimpleContract.address}`)
    
};

export default deploysimpleContract;