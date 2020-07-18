CREATE TABLE [dbo].[users](
	[user_id] [UNIQUEIDENTIFIER] PRIMARY KEY NOT NULL default NEWID(),
	[username] [varchar](30) NOT NULL UNIQUE,
	[password] [varchar](300) NOT NULL,
	[firstName] [varchar](300) NOT NULL,
	[lastName] [varchar](300) NOT NULL,
	[country] [varchar](300) NOT NULL,
	[email] [varchar](300) NOT NULL,
	[image] [varchar](300) NOT NULL,


)

