# submodules

**clone with all submodules**
git clone --recursive [URL to Git repo]

**get the submodules after cloning**
git submodule update --init

**pull all changes in the repo including changes in the submodules**
git pull --recurse-submodules

**pull all changes for the submodules**
git submodule update --remote

**update branch of submodule**
edit .gitmodules
    branch = feature/F_FileSysPerm-SECTEST
git submodule update --remote
