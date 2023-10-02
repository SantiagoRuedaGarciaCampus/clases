function App() {
    const express = require('express')
    const app = express()

    const port = 3000

    const arriendosRoutes = require('./app/controllers/Arriendos.controllers.js')

    app.use(arriendosRoutes)

    app.listen(port, ()=>{
        console.log(`App in line on port ${port}`);
    })
}

export default App;
