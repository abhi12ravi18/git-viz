# github-viz

## Steps I followed during this task:

1. **Configure a destination on my SCP Trial account - to link GitHub's REST API and SCP**
    - This solved the CORS issue I was facing.
![scp-destination](https://github.com/abhi12ravi/github-viz/blob/master/destination-scp.PNG)


2. **Tried to consume the service directly from Web IDE's wizard to make Master-Detail app, but was not successful**
    - I may have missed some step here, service shows up but when I add a relative URL, it says 404 error - very weird
    ![service-url](https://github.com/abhi12ravi/github-viz/blob/master/service-url.png)
    
3. **Changed the relative URL as well, it was still crashing with a different type of error**
    
    - Relative URL of the service I provided: `/users/sap/repos?sort=full_name`
    
    ![txt-split-error](https://github.com/abhi12ravi/github-viz/blob/master/text-split.PNG)
    
4. **I changed tracks and made a free-style UI5 app and now using AJAX requests, I'm trying to build the UI**

Status at 5 PM as on 30 Aug: 
![rest-api-works](https://github.com/abhi12ravi/github-viz/blob/master/git-viz-1.PNG)
