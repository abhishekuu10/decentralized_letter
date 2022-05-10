//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract experience {
    // address owner;
  

    struct letter {
        string name;
        string year;
        string joining_day;
        string last_day;
        string position;
        string issued_by;
        string issued_date;
        bool exist ;
    }
    
    mapping(string => letter) public database;
    uint256 public counter = 0;
    // string index;

    // generate  experience letter
    function experienceLetter(
        string memory  _name,
        string memory  _year,
        string memory  _joining_day,
        string memory  _last_day,
        string memory  _position,
        string memory  _issued_by,
        string memory  _issued_date,
        string memory  _employee_id 
    ) public  {

        require(database[_employee_id].exist==false, "experience letter already generated");
        // require (msg.sender==owner, " You are not authorized to generate experience letter") ;
        // index=_employee_id ;

           database[_employee_id ]= letter({
               name: _name,
               year:_year,
               joining_day:_joining_day,
               last_day:_last_day,
               position:_position ,
               issued_by:_issued_by,
               issued_date:_issued_date,
               exist:true 
           });

           counter++;
        
    }

    function getEmployee(string memory empId)public view returns(letter memory){
        return database[empId] ;
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
