const generateRandomNumber = (min, max) => {
  
  let randomId = Math.random() * (max - min) + min;

  return parseInt(randomId);

}


const gmailBaseURL = "https://gmail.googleapis.com";
const token = process.env.GOOGLE_ACCESS_TOKEN || ""

async function getLatestEmailId(request) {
    const response = await request.get(gmailBaseURL + "/gmail/v1/users/me/messages", {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    const data = await response.json();
    if (!data.messages?.length) {
        throw new Error('No Gmail messages found');
    }
    return data.messages[0].id;
}


async function getEmailBody(request) {
    const emailId = await getLatestEmailId(request);
    const response = await request.get(gmailBaseURL + "/gmail/v1/users/me/messages/" + emailId, {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    const data = await response.json();
    return data.snippet;
}


export { generateRandomNumber, gmailBaseURL, token, getLatestEmailId, getEmailBody };
    