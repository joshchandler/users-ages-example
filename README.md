# Users Ages Example #

This command-line program receives a file with the following parameters:

1. A file of any number of lines.

2. Each line contains a comma separated (integer) user ID and (integer) user's age.

3. Program outputs a list of (faux) tuples containing comma separated (integer) distinct age, and (integer) number of users with that distinct age.

4. Processing speed is a factor.


`NOTE:` Node.js doesn't exactly do tuples, so the next best option was nested arrays.


## Usage ##

```
npm install
node index.js /path/to/file.{txt,csv}
```

## Using Docker? ##

```
docker build -t <imagename> .
docker run --rm -v /path/to/host/repo:/var/www:rw <imagename> bash -c "npm install --no-bin-links"
docker run --rm -v /path/to/host/repo:/var/www:rw <imagename> bash -c "node index.js /path/to/file.{txt,csv}"
```


Run tests with `npm test`
