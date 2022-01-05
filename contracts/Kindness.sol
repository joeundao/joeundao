// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

/// @title A giving pool and project
/// @author sicktastic
/// @notice You can use this contract for creating giving pools and projects
/// @dev All functions are currently working in progress
contract Kindenss {
  struct Pool {
    address poolLeaderAddress;
    uint256 projectId;
    uint24 maxNumberOfMembers;
    uint256 maxKindnessAmount;
    bool allowLiquidity;
  }

  struct Kindness {
    address kindnessGiverAddress;
    uint256 id;
    uint256 kindnessAmount;
  }

  struct Project {
    address beneficiaryAddress;
    address delegatorAddress;
    uint256 id;
    uint256 categoryId;
    string name;
  }

  enum KindnessPoolStatus {
    Open,
    Closed,
    Deposited,
    Cancelled,
    Complete
  }

  enum ProjectStatus {
    Active,
    Inactive
  }

  /// @dev Only members can create the giving pool.
  function createPool() public {}

  /// @dev Only members can join the giving pool.
  function joinPool() public {}

  /// @dev Only Joeun DAO delegators can create the project.
  function createProject() public {}

  /// @dev Only members can add kindness.
  function addKindness() public {}

  /// @dev Only members with active kindness can cancel kindness
  function cancelKindness() public {}

  /// @dev When kindness is successfully activated send nft certificate to giver
  function _mintNftCertificate() private {}
}
