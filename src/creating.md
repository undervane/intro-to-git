# Creating a Project

We'll show how we can create and setup our own repository, which will later be synced with our remote repository hosted here, in Github. This way, you'll have your project safely stored and versioned, and that will allow you and others to collaborate.

## Creating a local repository

::: warning
⚠️ First of all, if you are using Windows, install the git bash terminal from [here](https://gitforwindows.org/)
:::

Open up the terminal or git bash, this is the tool we'll use to create our initialise our repository. 

Browse from the terminal to the directory that will host our project, usually you should browse to the folder where you have all your projects, you should use the `cd` command for that.

```bash
cd browse/to/directory
```
For example, in my case I always have a *.git* folder inside my user directory, there I host all my projects and other projects I've cloned, that makes it so easy as I can always type command below, and I'll quickly move to the general projects directory.

```bash
cd ~/.git 
```
::: tip Tips & Tricks
You can create the *.git* folder by browsing to home directory
```bash
cd ~
```
And create the directory
```bash
mkdir .git
```
Don't forget to browse inside the newly created directory!
```bash
cd .git
```
:::

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

Our project now counts with a git repository, at least a local one. If we add a file to our *pizza-generator* repository

```bash
touch README.md
```

We can see git detected a new file added to the repository by executing command below

```bash
git status
```

You can ***commit*** the new file by first adding it to the staged changes

```bash
git add README.md
```

And finally by commiting with a message describing the changes

```bash
git commit -m "Add new README.md file"
```

If you now run `git status` again you'll see the changes were mixed in the version control, in this case in the ***master branch***

```bash
git status
```

For now we have a local repository, which will allow us to completely use one of the most useful features of git: **version control**, but let's now see how we can actually "sync" our local project with GitHub.

## Linking to a remote repository

::: warning
First login to your account in GitHub, or create one from [here](https://github.com/join) if you don't have one.
:::

Let's now create a blank repository which will be "synced" with our previously created local repository. To do that, just click the **Create new repository** in the repositories page, or you can also click [here](https://github.com/new)

For the name, we'll use the same as before, write **pizza-generator**

You can leave all the default for the rest of configurations, we won't need them for this intro. You can click the **Create repository** button. You'll be redirected to the page that will host your new repository.

Hurray! 🎉 You have just created your first GitHub repository! 🙌

Although it's blank right now, this is the remote repository that will host our current local repository. We are specially interested in the url that links to this repository, if you click the green button **Clone or Download**, you will see the git link for this repository.

We can now return to the terminal, browse to the project location.

We'll now add the remote repository to our local repository, we can do it with the `git remote` command

```bash
git remote add origin https://github.com/your-username-here/pizza-generator.git
```
That's all! Easy, isn't it? 😍

But the changes still aren't in the repository, that's because we have to ***push*** to our remote repository all the commits of our *master* branch

```bash
git push -u origin master 
```

Now if you go to see the files of your GitHub repository, you'll see our blank README.me file.