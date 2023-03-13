# Graph-DB-Visualizer

Graph-DB-Visualizer is a web application that allows users to visualize graph databases in both 2D and 3D views. It was built using Apache AGE extension.

## Installation
Install dependencies: ```npm run setup```

Start the app: ```npm run start```

There are several ways to download the Apache AGE extension, but the simplest way is to use a Docker image. For more information, please refer to this page: https://github.com/apache/age#run-using-docker. After downloading the Apache AGE docker image, you can run the container and use the information entered during the download to successfully log in to the app.

## Usage
The following is a Cypher query statement that returns a simple set of nodes and edges.

``` SELECT * FROM cypher(‘Your Graph Name’, $$ MATCH (n) RETURN n $$) as (a agtype); ```

```SELECT * FROM cypher('Your Graph Name', $$ MATCH (n)-[r]-(n2) RETURN n,r,n2 $$) as (n agtype, r agtype, n2 agtype);```

Please refer to the following link for more detailed Cypher queries for graph creation and node/edge creation: https://age.apache.org/age-manual/master/intro/graphs.html.

## App Demo
### Cytoscape
![graph-1](https://user-images.githubusercontent.com/97130553/224837612-1c90764e-e62e-43e5-af4e-408163d9084c.gif)

### 3D view
![graph-2](https://user-images.githubusercontent.com/97130553/224836744-4dfba353-a02e-43bb-8694-4a4e47d8324e.gif)
