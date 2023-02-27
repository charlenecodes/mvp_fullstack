ALTER TABLE experiences ADD FOREIGN KEY (categoryID) REFERENCES categories(id);

ALTER TABLE cart ADD FOREIGN KEY(categoryID) REFERENCES categories(id
);

INSERT INTO experiences (experience, amount, info, categoryID) VALUES 
("Grubenberg hut stay", 150, "The Grubenberg hut (1840 m) stay includes dinner and breakfast, drinks and other snacks are paid separately. Perfect place to start a hike and watch the stars with no light pollution. This is perfect for a backpacker or a group of backpackers/hikers who want to explore the outdoors during the day without needing to set up a campsite and still have a hot meal for dinner.

There are no showers (only an outhouse and sink with running water). Bring a sleeping bag or purchase one at the hut.", 1),
("Snowshoe Switzerland", 120, "Cost of the snowshoe rental, winter shoes, transport from the meeting point and back are all inclusive with this experience", 1),
("Relaxing mountain spa", 100, "This spa includes a sauna, steam room, and heated pools both indoor and outdoor with a view of the Swiss alps and Lake Luzern. This experience includes the round trip cable car ride from Weggis to Rigi Kaltbad.", 2),
("Unlimited train, bus, and ship ride for a day", 95, "Ride any form of public transport in Switzerland without worrying about a missed connection. Cable cars are not included in this offer.", 2),
("Swiss travel family pass", 120, "Includes free access to certain museums, kids under 16 travel for free with a parent who holds a pass", 3),
("Pilatus toboggan ride", 100, "Includes the rental of the toboggan and a day pass so you can ride an unlimited amount of tiem.

Does not include the cost of going up Mt. Pilatus", 3);

CREATE TABLE orders ( 
    orderid INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    userid INTEGER NOT NULL,  
    amount DECIMAL(10,2), 
    FOREIGN KEY (userid) REFERENCES users(userid) 
);

CREATE TABLE users ( 
    userid INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    firstName VARCHAR(50) NOT NULL, 
    lastName VARCHAR(50) NOT NULL, 
    email VARCHAR(50) NOT NULL, 
    accountCreated TIMESTAMP
);