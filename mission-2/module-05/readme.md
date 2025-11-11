## Why use TypeScript?

### Pros
1. Type Safety by defining types
2. Easy to detect bugs while coding
3. Improves code readability
4. Large scale project - worldwide use. For example: Google, Microsoft etc. all use typescript
5. Helps with team collaboration


## Installation - Mac 

### Step-1: Uninstall Typescript
```
sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf /usr/local/include/node
sudo rm -rf /usr/local/bin/node
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/bin/npx
rm -rf ~/.npm
```
This removes all Node files and npm cache.

Check that it’s gone:
```
node -v
npm -v
```
Both should say “command not found.”

### Step 2: Install NVM (Node Version Manager)

In your Terminal, copy and run:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh)"
```
That installs NVM under your home folder (~/.nvm).

Then activate it right away (you only do this once):
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
To make sure it’s working:
```
command -v nvm
```
If you see nvm, it’s installed.

### Step 3: Install Node via NVM

Now you can install any version easily, e.g.:
```
nvm install 24.11.0
```

That installs Node v20 LTS.

You can check:
```
node -v
npm -v
```

### Step 4: Switch / Manage versions later

You can now do things like:
```
nvm install 18     # installs Node 18
nvm use 18         # switch to Node 18
nvm use 20         # switch back to Node 20
nvm ls             # list installed versions
nvm uninstall 18   # remove Node 18
```
That’s it — Node is now isolated, safe to upgrade, and won’t mess with system files.