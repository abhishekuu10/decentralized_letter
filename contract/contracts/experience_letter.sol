//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract experience {
    address owner;
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    struct letter {
        string name;
        uint128 experince;
        string joining_day;
        string last_day;
        string position;
        string issued_by;
        string issued_date;
    }
    // mapping(bytes32 => mapping(bytes32 => uint256)) indexKepper;
    mapping(uint256 => Student) public database;
    uint256 counter = 1;
    uint256 index=0;

    // Add student function
    function addStudent(
         string _name,
        uint128 _experince,
        string _joining_day,
        string _last_day,
        string _position,
        string _issued_by,
        string _issued_date
    ) public onlyOwner {
        bytes32 __name = toBytes32(__name);
        // index = indexKepper[_name][_rollNo];
        index+=1
        if (database[index].exist == false) {
            indexKepper[_name][_rollNo] = counter;
            index = counter;
            database[index].name = __name;
            database[index].rollNo = toInt(__rollNo);
            database[index].result = toInt(__result);
            database[index].sem1 = toInt(__sem1);
            database[index].sem2 = toInt(__sem2);
            database[index].gender = __gender;
            database[index].university = __university;
            database[index].exist = true;
            counter++;
            totalStudents++;
        } else {
            database[index].result = toInt(__result);
            database[index].name = __name;
        }
    }

    //  additional functionsfor help
    function toBytes32(string memory source)
        internal
        pure
        returns (bytes32 result)
    {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
        assembly {
            result := mload(add(source, 32))
        }
        return result;
    }

    function toInt(string memory _value) internal pure returns (uint256 _ret) {
        bytes memory _bytesValue = bytes(_value);
        uint256 j = 1;
        for (
            uint256 i = _bytesValue.length - 1;
            i >= 0 && i < _bytesValue.length;
            i--
        ) {
            assert(uint8(_bytesValue[i]) >= 48 && uint8(_bytesValue[i]) <= 57);
            _ret += (uint8(_bytesValue[i]) - 48) * j;
            j *= 10;
        }
        return _ret;
    }
}







// contract Greeter {
//     string private greeting;

//     constructor(string memory _greeting) {
//         console.log("Deploying a Greeter with greeting:", _greeting);
//         greeting = _greeting;
//     }

//     function greet() public view returns (string memory) {
//         return greeting;
//     }

//     function setGreeting(string memory _greeting) public {
//         console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
//         greeting = _greeting;
//     }
// }
