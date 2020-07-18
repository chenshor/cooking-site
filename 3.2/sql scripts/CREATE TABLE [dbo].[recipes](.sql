-- CREATE TABLE [dbo].[MyRecipes](
-- 	[recipe_id] [int] PRIMARY KEY NOT NULL,
-- 	[username] [varchar](30),
-- 	[recipe_Info] [text] NOT NULL,
-- 	FOREIGN KEY (username) REFERENCES users(username)
-- )

-- CREATE TABLE [dbo].[FamilyRecipes](
-- 	[recipe_id] [int] PRIMARY KEY NOT NULL,
-- 	[username] [varchar](30),
-- 	[recipe_Info] [text] NOT NULL,
-- 	FOREIGN KEY (username) REFERENCES users(username)
-- )

-- CREATE TABLE [dbo].[MyRecipes](
-- 	[username] [varchar](30) NOT NULL,
-- 	[recipe_id] [int] NOT NULL,
-- 	PRIMARY KEY (username,recipe_id),
-- 	FOREIGN KEY (username) REFERENCES users(username)
-- )

