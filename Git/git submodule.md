# clone a repo with all submodules
git clone --recursive <repo>

# Update submodule after checking out a branch
git submodule update

# clone all its submodules after cloning the parent repo
git submodule update --init --recursive

