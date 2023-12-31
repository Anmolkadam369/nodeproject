const aws = require("aws-sdk");

aws.config.update({
    accessKeyId: "AKIAY3L35MCRZNIRGT6N",
    secretAccessKey: "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",
    region: "ap-south-1",
});

let uploadFile = async (file) => {
    return new Promise(function (resolve, reject) {
        let s3 = new aws.S3({ apiVersion: "2006-03-01" });

        var uploadParams = {
            ACL: "public-read", //Access Control Locator
            Bucket: "classroom-training-bucket",
            Key: "abc/" + file.originalname,
            Body: file.buffer,
        };

        s3.upload(uploadParams, function (err, data) {
            if (err) {
                return reject({ error: err });
            }
            console.log("file uploaded succesfully");
            return resolve(data.Location);
        });
    });
};

const awsLink = async (req, res, next) => {
    try {
        let bookCover = req.files;
        console.log(bookCover);
        if (bookCover) {
            if (Object.keys(bookCover).length == 0) return res.status(400).send({ status: false, message: "Please upload Profile Image" });
            let image = await uploadFile(bookCover[0]);
            req.image = image;
            next()
        }
        else {
            return res.status(400).send({ status: false, message: "Please upload bookCover Image" });
        }
    }
    catch (err) { return res.status(500).send({ status: false, error: err.message }) }
}

module.exports={awsLink};