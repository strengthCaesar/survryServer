let fs = require('fs');

let general = require('./mongodb/collections/general');

class createNewObject {

    constructor() {

    }

    party(name,candidate) {
        return {
            name: name,
            votes: 0,
            mandates: 0,
            userThatVoted:[],
            candidate:candidate,
            _id: general._lastId
        }
    }

    newParty(nParty) {
        console.log('nParty', nParty);
        // this.general.lastId++;
        // this.saveToDB();
        return {
            name: nParty.partyName,
            partyLeader: nParty.partyLeader,
            partyImageUrl: nParty.imageUrl,
            candidateList: nParty.candidateList,
            creatorInfo: {
                ipv6: nParty.ipv6,
                imei: nParty.imei
            },
            userThatVoted: [{
                ipv6: nParty.ipv6,
                imei: nParty.imei
            }],
            votes: 1,
            _id: general._lastId
        }
    }


    client(userInfo, location) {

        return {
            userInfo: userInfo,
            location:location,
            createOn:new Date(),
            voteHistory:[],
            currentVote: undefined,
            _id: general._lastId
        }
    }

}
module.exports = new createNewObject();