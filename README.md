This is a Restful Node application 'Random Key Generator'.

Framework Used:
Express

Tools Used:
express-generator

Backend Database Used:
Mongodb

How to Run the application in local:

Step 1: Take the code in local
Step 2: Open cmd/terminal and run cmd 'npm install'
Step 3: run 'npm start' cmd be sure step 2 has completed.
Step 4: Hit Request Using Postman (chrome extension)

There are 5 endpoints as given below:

1. Generate Key: endpoint to generate keys
    Method: POST
    URL:    http://localhost:3000/generateKey

    Sample response: 
                        {
                                 "key": "8830",
                                 "available": true,
                                 "block": false
                        }

2. Random Available Key: endpoint to get an available key
    Method: PATCH
    URL:    http://localhost:3000/availableKey

    Sample response:
            i.    Available key:5971
            ii.  ERROR: 404- NO Available Key...

3. Unblock Key: endpoint to unblock a key
    Method: PATCH
    URL:    http://localhost:3000/unblockKey/{key}
    Note- Here key is a uri parameter

    Sample response:
                    {
                        "_id": "5b2968191da8563050ce9978",
                        "key": "5971",
                        "available": true,
                        "block": false,
                        "__v": 0
                    }      

4. Delete Key: endpoint to delete a key
    Method: DELETE
    URL:    http://localhost:3000/deleteKey/{key}
    Note- Here key is a uri parameter

    Sample response:
                    {
                        "_id": "5b2968191da8563050ce9978",
                        "key": "5971",
                        "available": true,
                        "block": false,
                        "__v": 0
                    }

5.  All Keys: endpoint to get all keys
    Method: GET
    URL:    http://localhost:3000/allkeys

    Sample response:
                    [
                            {
                                "_id": "5b293ffece80ed069cdc03bd",
                                "key": "6597",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b2942f0575d6a2cdc20aeb0",
                                "key": "3486",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b2942f1575d6a2cdc20aeb1",
                                "key": "3608",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b29446a66b0d510a8bded23",
                                "key": "5710",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b296271844a8e371cbaf556",
                                "key": "8125",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b296273844a8e371cbaf557",
                                "key": "9220",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b2963abc69cee3688e4a41f",
                                "key": "515",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b2966cdc69cee3688e4a420",
                                "key": "8830",
                                "available": false,
                                "block": true,
                                "__v": 0
                            },
                            {
                                "_id": "5b2967f9c69cee3688e4a421",
                                "key": "4520",
                                "available": false,
                                "block": true,
                                "__v": 0
                            }
                    ]