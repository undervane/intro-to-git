# Intro to Git
This is a repo made to demonstrate the usage and workflow of git

## Creating a project

We'll show how we can create and setup our own repository, which will later be synced with our remote repository hosted here, in Github. This way, you'll have your project safely stored and versioned, and that will allow you and others to collaborate.

### Creating a local repository

> ⚠️ First of all, if you are using Windows, install the git bash terminal from [here](https://gitforwindows.org/)

Open up the terminal or git bash, this is the tool we'll use to create our initialise our repository. 

Browse from the terminal to the directory that will host our project, usually you should browse to the folder where you have all your projects, you should use the `cd` command for that.

```bash
cd browse/to/directory
```
For example, in my case I always have a *.git* folder inside my user directory, there I host all my projects and other projects I've cloned, that makes it so easy as I can always type command below, and I'll quickly move to the general projects directory.

```bash
cd ~/.git 
```
> **Tips & Tricks**
> You can create the *.git* folder by browsing to home directory
> ```bash
>cd ~
>```
>And create the directory
>```bash
>mkdir .git
>```
>Don't forget to browse inside the newly created directory!
>```bash
>cd .git
>```

Inside the general projects directory, let's create the folder for our project. Our project will be called *pizza-generator*

```bash
mkdir pizza-generator
```
Browse inside the directory

```bash
cd pizza-generator
```
Now we initiate the git repository first locally

```bash
git init
```

Our project now counts with a git repository, at least a local one. If we add a file to our *pizza-generator* repository, we can see git detected a new file added to the repository by executing command below

```bash
git status
```

For now we have a local repository, which will allow us to completely use one of the most useful features of git: **version control**, but let's now see how we can actually "sync" our local project with GitHub

### Linking to a remote repository

> First login to your account in GitHub, or create one from [here](https://github.com/join) if you don't have one.

Let's now create a blank repository which will be "synced" with our previously created local repository.

## Using other's projects
