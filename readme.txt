auxillary:
<container_name> = Name obtianed from running "docker ps"

docker login --username=<uname> #to login into dockerhub

docker info - get info about currently running docker instance
docker image - list all containers
docker run <image_name> - run docker image
docker run -ti <image_name> <command> - run command on container [Terminal Interface]
eg: docker run -ti ubuntu bash

docker ps - get information regarding currently running docker containers
docker ps -a - get information regarding stopped containers
docker ps -l - get information regarding last exited container
docker commit <container_id> <new_tag_name> - to create an image of a container with specified tag, returns the hashed_image_id
docker run --rm -ti <image_name> <command> - run command on container and then delete container post exit
docker rmi <image_name>:<tag>(optional) - clear downloaded images
eg: docker run --rm -ti ubuntu sleep 5
eg: docker run --rm -ti ubuntu bash -c "sleep 5; echo all done" # use ; in bash to run multiple commands

docker run -d -ti <image_name> <command> - run command on container and runs container in background [detach]
docker attach <<NAME of container from docker ps>> - to attach on specified background docker
ctrl+p,ctrl+q - to exit docker and leave it running in background

docker exec -ti <<NAME of container from docker ps>> - to run a program on the background container
docker run --name <random_name> <image_name> - run docker image with specified name(easy for lookup)
eg:docker run --name example -d ubuntu bash

docker logs <container_name> - get logs of containers
docker kill <container_name> - kills container
docker rm <container_name> - deletes all data of container
docker run  --memory <integer> <image_name> <command>
docker run --cpu-share - give equal cpu to all running dockers
docker run --cpu-quota - assign % of cpu to dedicate to the container at given time
docker inspect <container_name> - to get the root process

docker system df - get size of all running docker instances

docker run -ti -v "/var/run/docker.sock:/var/run/docker.sock" <container_name> - This runs docker inside a container by 
                                                                                using host daemon

docker cp <host_file_path>  <container_id>:<client_path>
eg:docker cp C:\Users\smend\Downloads\docker-production-aws.pem  3007165a03c9:/home/.ssh/

Notes:
Do not let docker fetch dependencies, add them in container itself
Do not leave important processes running on unnamed stopped containers