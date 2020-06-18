## General PC Setup
We should setup a system in such a way that in case our system crash then we can setup everthing pretty quickly. WE should have programmatically a way to restore everything.

For now I assume you are able to install a linux which support apt and snapd

The following command will install the rest of things
```
sudo apt-get install -y g++ gdb git cmake                                           # install g++ gdb git and cmake
sudo snap install skype --classic                                                   # install skype
sudo snap install code --classic                                                    # install visual studio code
sudo snap install eclipse --classic                                                 # install Eclipse Integrated Development Environment (For C++)
sudo snap install intellij-idea-community --classic                                 # install Idea Integrated Development Environment (For Java)
sudo snap install odrive-unofficial                                                 # install google drive client
sudo apt-get install -y nodejs npm                                                  # install nodejs javascript interpreter and runtime
sudo apt-get install -y openjdk-8-jdk openjdk-11-jdk openjdk-13-jdk openjdk-14-jdk  # install java runtime and compiler version 8, 11, 13 and 14
sudo apt-get install -y  libboost-all-dev                                           # install c++ boost library
sudo apt install -y  okular                                                         # install ocular epub reader
sudo apt-get install -y maven                                                       # install maven java build and pacakge management tool
sudo snap install aws-cli --classic                                                 # install aws cli
sudo npm install -g typescript                                                      # install typescript compiler
sudo npm install -g aws-cdk                                                         # install aws cdk

# Install Eclipse plugins for C++ Development
eclipse -application org.eclipse.equinox.p2.director -repository http://download.eclipse.org/releases/latest -installIU org.eclipse.cdt.feature.group
eclipse -application org.eclipse.equinox.p2.director -repository http://download.eclipse.org/releases/latest -installIU  org.eclipse.cdt.testsrunner.feature.feature.group
eclipse -application org.eclipse.equinox.p2.director -repository http://download.eclipse.org/releases/latest -installIU  org.eclipse.linuxtools.callgraph.feature.feature.group
eclipse -application org.eclipse.equinox.p2.director -repository http://download.eclipse.org/releases/latest -installIU  org.eclipse.linuxtools.cdt.libhover.feature.feature.group
eclipse -application org.eclipse.equinox.p2.director -repository http://download.eclipse.org/releases/latest -installIU  org.eclipse.cdt.managedbuilder.llvm.feature.group
eclipse -application org.eclipse.equinox.p2.director -repository http://download.eclipse.org/releases/latest -installIU  org.eclipse.cdt.gnu.multicorevisualizer.feature.group
eclipse -application org.eclipse.equinox.p2.director -repository http://download.eclipse.org/releases/latest -installIU  org.eclipse.cdt.autotools.feature.group
eclipse -application org.eclipse.equinox.p2.director -repository https://raw.githubusercontent.com/15knots/cmake4eclipse/master/releng/comp-update -installIU de.marw.cmake.cdt
# Eclipse Plugin done

# Install vs code plugins
code --install-extension ms-vscode.cpptools
# Vscode plugin installation done

# install dropbox
cd /tmp && rm dropbox.deb && wget -O dropbox.deb  -c  "https://www.dropbox.com/download?dl=packages/ubuntu/dropbox_2020.03.04_amd64.deb" && sudo dpkg -i dropbox.deb && cd -

```

Once this is done you need to make sure have account in dropbox and google drive and all the documents, pdf etc are shared there so you dont loose them. and after the login you automatically sync.

All the code you work on should be pushed to git so that it can shared and worked together easily.

Also make sure u login to chrome, firefox so that your bookmarks and other settings are not lost.

Having followed all the above steps mean if your pc has issues you can format it and install a new Ubuntu, then run the command and then login to all the app and you are ready.

Configure your git
```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

## CPP Setup 
How to setup C++. Intially we will be working on building components like Date, Vector, Matrix, Tree, etc So we dont need a main function. We are building a reusable library which can be used by any consumer.

The first step is to understand how the command line g++ works. Once we are okay then we are going to use a build system. In this phase we are going to use VS Code as a code Editor.

Later on we will be using Eclipse as the IDE which is very powerful and makes things very convinient.

cmake4eclipse - https://books.google.de/books?id=YVG7DwAAQBAJ&pg=PA9&lpg=PA9&dq=cmake4eclipse&source=bl&ots=qgHjAfjlcA&sig=ACfU3U21IppdYpImjXxBfWD69-2NYeHB4w&hl=de&sa=X&ved=2ahUKEwimtrONqJjnAhVKK1AKHVIEC2k4ChDoATAIegQIChAB#v=onepage&q=cmake4eclipse&f=false

