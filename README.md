# Resource management with `Systemd` example

## Prerequisites

- Node.js version 14+
- Git
- I tested this with:
  * Debian 10.9 "buster" on Hyper-V




## Setting up

To run the example, clone this repository to your environment.

```sh
$ git clone git@github.com:lettenj61-examples/systemd-resource-example.git
```

Then copy application files by running `install.sh`. This requires `sudo` enabled with the user you logging in.

```sh
$ ./install.sh
```

It will place files in `/opt/yes-test`, and configure permissions.




## Install the service unit

You have to move the service unit file `yes-test.service` manually. Typical commands are:

```sh
$ sudo cp -pf resources/yes-test.service /etc/systemd/system/yes-test.service
```




## Start the test

Start the example service:

```sh
$ sudo systemctl daemon-reload
$ sudo systemctl start yes-test.service
```

Now you can invoke testing function by making a request to the endpoint:

```
$ curl http://localhost:8001/
```

See the machine status with commands of your choice (like `top`)

Once you finished, run:

```sh
$ sudo systemctl stop yes-test.service
```
