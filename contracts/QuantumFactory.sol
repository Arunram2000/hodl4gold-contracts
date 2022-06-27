// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "./QuantumStaking.sol";

interface IQuantumStaking {
    function initialize(
        IERC20 _stakingToken,
        IERC20 _earnedToken,
        address _dividendToken,
        uint256 _rewardPerBlock,
        uint256 _depositFee,
        uint256 _withdrawFee,
        address _uniRouter,
        address[] memory _earnedToStakedPath,
        address[] memory _reflectionToStakedPath,
        bool _hasDividend
    ) external;

    function transferOwnership(address newOwner) external;
}

contract QuantumFactory {
    mapping(address => address[]) public registry;

    event StakingContractCreated(address Creator, address StakingContract);

    function createStakingContract(
        IERC20 _stakingToken,
        IERC20 _earnedToken,
        address _dividendToken,
        uint256 _rewardPerBlock,
        uint256 _depositFee,
        uint256 _withdrawFee,
        address _uniRouter,
        address[] memory _earnedToStakedPath,
        address[] memory _reflectionToStakedPath,
        bool _hasDividend
    ) external returns (address stakingContract) {
        bytes memory bytecode = type(QuantumStaking).creationCode;

        bytes32 salt = keccak256(abi.encodePacked(msg.sender));

        assembly {
            stakingContract := create2(
                0,
                add(bytecode, 32),
                mload(bytecode),
                salt
            )
        }

        IQuantumStaking(stakingContract).initialize(
            _stakingToken,
            _earnedToken,
            _dividendToken,
            _rewardPerBlock,
            _depositFee,
            _withdrawFee,
            _uniRouter,
            _earnedToStakedPath,
            _reflectionToStakedPath,
            _hasDividend
        );

        IQuantumStaking(stakingContract).transferOwnership(msg.sender);

        registry[msg.sender].push(stakingContract);

        emit StakingContractCreated(msg.sender, stakingContract);

        return stakingContract;
    }
}
