cp .vimrc ~/.vimrc

cp .cred/.ssh/* ~/.ssh/
cp -r .cred/.aws ~/.aws/

git config --global user.name "Duong Trieu" \
    && git config --global user.email "kltduong@gmail.com" \
    &&  git config --global core.editor "vim"

export SSH_KEY=id_ed25519
eval "$(ssh-agent -s)"
chmod 400 ~/.ssh/${SSH_KEY}
ssh-add ~/.ssh/${SSH_KEY}
ssh -T git@github.com
