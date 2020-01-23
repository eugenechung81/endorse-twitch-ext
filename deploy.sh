
APP_HOST=174.138.48.18
REMOTE_DIR=/root/twitch-ext
RSYNC_FLAGS="--exclude=.idea
    --exclude=venv
    --exclude=frontend
    --exclude=tests
    --exclude=.git
    --exclude=etc
    -av
    --delete"

function build_frontend()
{
    # building frontend for zip dist
    echo "Building Frontend..."
    cd frontend
    npm run build
    cp -rf public/data dist
    cp -rf public/img dist
    cd dist; zip ../dist.zip -r .; cd ..
    cd ..
}

# build_frontend

# build and deploy
rsync ${RSYNC_FLAGS} . root@${APP_HOST}:${REMOTE_DIR}
ssh root@${APP_HOST} "cd ${REMOTE_DIR} && docker-compose up -d --build"