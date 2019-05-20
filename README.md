## How do we build and run it? 
DEMO link: (https://nervous-jepsen-8c464f.netlify.com/)[https://nervous-jepsen-8c464f.netlify.com/]

or run it locally:
```
git clone REPO_URL
cd FOLDER_NAME
npm install
npm start
```

## What tools did you use? Why did you use them? 
- create-react-app library, for minimize problems with webpacks;
- hooks for keeping function components and modern development;
- typescript to deal with types;
- Context API for global state management;
- integration with API. I used fetch and async await for resolving promise;
- styled components for css in js;
- Loading spinner for UX

## Things I would like to improve
- animation
- keyboard event up and down to navigate in the list
- improve polling since setInterval does not take network latency into account
