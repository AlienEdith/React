# Instrucation

### Set up
1. Start server on Port **3001**:
   
    `$ cd server && npm start`
2. Start rtmpserver on Port **8000**
   
    `$ cd rtmpserver && npm start`

3. Start Client-side Server on Port **3000**
   
    `$cd client && npm start`

### Stream
1. Login with Google Account
2. Create a Stream / Use existing stream. Look into `server/db.json` to find its **id** 
3. Open OBS studio (or other video streaming software) and set up its basic configuration
   - Settings - Stream
       - Service: `Custom`
       - Server: `rtmp://localhost/live`
       - Stream Key: `id` of the stream you created / used
   - Start Streaming
4. Get into the detail page of that stream, now you should be able see your screen is being live-streamed!