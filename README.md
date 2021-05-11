## MONGO
Mongo is a document model

Disadvantages of SQL:
* Harder to understand due to relationships between multiple tables
* Harder to add features
* Pulling data from multiple tables is inefficient

Advantaegs of NoSQL:
* Fault toleranace
* Scalable across multiple servers
* Move data to different location

Advantaegs of Mongo:
* Polymorphic data structure
* Easy and natural rep
* No complex mapping between application and data

Terminology:
* Database -> Database
* Table -> Collection
* Index -> Index
* Row -> Document
* Column -> Field
* Join -> Embeddeding, linking, $lookup

Binary-JSON(BSON) data type
* Supports int, long, float and decimal 
* Fast
* Flexible
* Consumes less space

Supports ACID properties:
* A - Atomicity - All transaction or none
* C - Consistency - Only valid data is saved
* I - Isolation - Transactions do not effect one another
* D - Durability - Written data will not be lost

Querying languages:
* MQL(Mongodb Queying Language) - Simple get queries
* MAF(Mongodb Aggregation Framework) - Easy for aggregation
