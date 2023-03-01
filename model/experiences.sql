-- ALTER TABLE experiences ADD FOREIGN KEY (categoryID) REFERENCES categories(id);

-- ALTER TABLE cart ADD FOREIGN KEY(categoryID) REFERENCES categories(id);

INSERT INTO categories (category, id) VALUES 
("backpacker", 1), 
("budget", 2), 
("family", 3);

INSERT INTO experiences (experience, amount, info, img, categoryID) VALUES 
("Grubenberg hut stay", 
150, 
"The Grubenberg hut (1840 m) stay includes dinner and breakfast, drinks and other snacks are paid separately. Perfect place to start a hike and watch the stars with no light pollution. This is perfect for a backpacker or a group of backpackers/hikers who want to explore the outdoors during the day without needing to set up a campsite and still have a hot meal for dinner. There are no showers (only an outhouse and sink with running water). Bring a sleeping bag or purchase one at the hut.", 
"https://www.sac-cas.ch/processed/sa2020assetsprod/9/0/csm_1538740963_649304940master_e80b86defc.jpg", 
1),

("Snowshoe Switzerland", 
120, 
"Cost of the snowshoe rental, winter shoes, transport from the meeting point and back are all inclusive with this experience", 
"https://jungfrauregion.swiss/fileadmin/rtp_importer/Schneeschuhwandern_Schwarzwaldalp-23432026.jpg", 
1),

("Relaxing mountain spa", 100, "This spa includes a sauna, steam room, and heated pools both indoor and outdoor with a view of the Swiss alps and Lake Luzern. This experience includes the round trip cable car ride from Weggis to Rigi Kaltbad.", "https://www.rigi.ch/_Resources/Persistent/90d48b483e934c53ef78bddcd390fb9e543e8fd0/Berg-Bahn-Bad%20Kombi-1200x681-752x427.jpg", 2),

("Unlimited train, bus, and ship ride for a day", 95, "Ride any form of public transport in Switzerland without worrying about a missed connection. Cable cars are not included in this offer.", "https://cdn.img.sbb.ch/content/dam/internet/sharedimages/business/B2B-Work-Smart-Zweite-Klasse.jpg?crop=focalpoint&fp-x=0.5746875&fp-y=0.41777778&fp-z=1&w=1200&h=628&auto=format,compress,cs=tinysrgb&q=45", 2),

("Swiss travel family pass", 120, "Includes free access to certain museums, kids under 16 travel for free with a parent who holds a pass", "https://www.mystsnet.com/wp-content/uploads/2018/11/Swiss-Family-Card-01_feature.jpg", 3),

("Pilatus toboggan ride", 
100, 
"Includes the rental of the toboggan and a day pass so you can ride an unlimited amount of time.

Does not include the cost of going up Mt. Pilatus", "https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/st/gadmin/images/sport/summer/various/sommer-rodelbahn_mit-aussicht_40893.jpg", 3);

-- these are the data types created for the feature extensions
-- CREATE TABLE orders ( 
--     orderid INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL, 
--     userid INTEGER NOT NULL,  
--     amount DECIMAL(10,2) NOT NULL, 
--     FOREIGN KEY (userid) REFERENCES users(userid) 
-- );

-- CREATE TABLE users ( 
--     userid INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, 
--     firstName VARCHAR(50) NOT NULL, 
--     lastName VARCHAR(50) NOT NULL, 
--     email VARCHAR(50) NOT NULL, 
--     accountCreated TIMESTAMP NOT NULL
-- );