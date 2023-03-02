import express from 'express';
import cors from 'cors';
import { uuid } from 'uuidv4';

const app = express();

app.use(cors());
app.use(express.json());

app.get('*', (req, res) => {
  res.json({ message: 'pong'})
})

app.post('*', (req, res) => {

  console.log(req.body);
  let message = 'Try ask something another or use ContactUs Form';

  if (/hi|hello/gi.test(req.body.message)) {
    message = `Hello Hello :)`
  }

  if (/blog/gi.test(req.body.message)) {
    message = `Blogging has become an increasingly popular way for individuals and businesses to share their thoughts, ideas, and products with the world. With the rise of social media and the internet, it has become easier than ever before to create and publish content that can be seen by millions of people.
\n\n
A blog post is a form of content that is typically written in an informal style and can cover a wide range of topics. From personal experiences to industry news, blog posts can provide valuable insights into a particular subject and spark discussion and debate among readers.
\n\n
Check https://solutionshub.epam.com/blog for more info`
  }

  if (/solution/gi.test(req.body.message)) {
    message = `A software solution is a program or application that provides a specific functionality to address a particular problem or need. It can range from a simple app that helps you organize your schedule, to complex software systems used by businesses for operations and management.
\n\n
Software solutions can be developed in-house by organizations, or purchased from third-party vendors. They can also be customized or tailored to meet specific requirements.
\n\n
The benefits of software solutions include increased efficiency, improved accuracy, and reduced costs. They can also provide data analytics and insights to help businesses make informed decisions and streamline their operations.
\n\n
As technology continues to advance, software solutions are becoming increasingly important in our daily lives, and are expected to continue to play a vital role in solving problems and improving our quality of life.
\n\n
Check https://solutionshub.epam.com/search for more info
`
  }

  if (/thx|thank you|thanks/gi.test(req.body.message)) {
    message = `Always here to help you :)`
  }

  const id = uuid();

  setTimeout(() => {  res.json({
    id,
    message,
  })}, 1500);
});

app.listen(5000, () => {
  console.log('http://localhost:5000')
})