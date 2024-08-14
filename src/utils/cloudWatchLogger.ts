import AWS from "aws-sdk";

AWS.config.update({ region: "India" });
const cloudwatchlogs = new AWS.CloudWatchLogs();

const logGroupName = "your-log-group";
const logStreamName = "your-log-stream";

// Ensure the log stream exists
async function ensureLogStream() {
  try {
    await cloudwatchlogs
      .createLogStream({ logGroupName, logStreamName })
      .promise();
  } catch (error) {
    if (error.code !== "ResourceAlreadyExistsException") {
      console.error("Error ensuring log stream exists:", error);
    }
  }
}

async function logToCloudWatch(message) {
  await ensureLogStream();

  const params = {
    logEvents: [
      {
        message: JSON.stringify(message),
        timestamp: Date.now(),
      },
    ],
    logGroupName,
    logStreamName,
  };

  try {
    const data = await cloudwatchlogs.putLogEvents(params).promise();
    console.log("Log sent to CloudWatch:", data);
  } catch (error) {
    console.error("Error logging to CloudWatch:", error);
  }
}

export default logToCloudWatch;
