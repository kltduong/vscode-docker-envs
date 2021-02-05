import os

import uvicorn

if __name__ == "__main__":

    port = int(os.getenv("PORT", "9000"))
    uvicorn.run("server.main:app", host="0.0.0.0", port=port)
