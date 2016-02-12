---
layout: post
title: Best of Reddit - Special - Automate Best of Reddit
date: 2015-03-30 07:57:03.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

_Published on Monday, March 30\. This post is directly related to Best of Reddit - Issue 12 published on Friday, January 30 2015\._

No introduction this week, if you were looking for the "typical" Best of Reddit post, those are going to get published back on schedule, every Friday starting again this week. If you're curious to find out more, hold with me for a few moments more.

The Issue published the last time, as you might have noticed from its length and its difference from any other Best of Reddit post, was the first sneak peak on what I have been working on for this column for a while (let's say for a few weeks if you count from idea to execution). Now I have tested it and polished it enough that I feel "relatively comfortable" to share it with the world. (Not that's anything special of course, just a geek being geeky as always).

**I present you: [Best of Reddit][0].**
Navigation

[What ][#what]

[Dependencies][#dependencies]

[Install][#install]

[Input Files][#input-files]

[Extras ][#extras]

[Run It ][#run-it]

[The Actual Script][#the-actual-script]

[FAQ ][#faq]

## What

Best of Reddit is a small python script (just a self contained file really) that I've written to automate the posting of "Best of Reddit" threads, or better said the scraping part of it --- every link still needs to be checked before being sent out in the wild, and it needs to include my personal impressions so I still have to go over it one by one myself. The script though makes the rest of it way easier. [I'm still unsure if i'm going to actually use it consistently every week, or if I'm going to keep doing it manually (as I've done so far --- apart from the previous Issue)].

A one liner description would be:

**"Best of Reddit" scrapes Reddit using the official [APIs][9] and packs the results in a [markdown][10] formatted .txt file.**

That's it.It uses a few .txt support files for basic configuration and it can be run from [Keyboard Maestro][11] if you want to automate it all further to just a keyboard shortcut or schedule it to run every week at a specific time, but let's proceed in order.[^1] The script as it is runs every Friday morning, but it can be changed easily to run every day of the week or once a month even, you would need to change it manually if you'd like to do so, but it's fairly easy.

## Dependencies

The only dependency is [praw][13], which is what I use to access Reddit APIs. Nothing more --- well apart from python itself of course.[^2]

`Best of Reddit` has been tested to work with either python 2.7.8/2.7.9 and python 3.4.* Open an issue on Bitbucket if for any reason it doesn't work on your machine.

If you have pip installed, you can get praw by opening your terminal window and run `pip install praw`. If you don't you can either use `easy_install pip` to install pip and than follow the previous step (recommended) or just install it through easy\_install (bad) `easy_install praw`.

Remember to use `pip3` if you're running on python 3\. ;)

## Install

The installation process is really easy, once you get the dependencies set up. The easiest way is to clone my [repository][15] wherever you want on your system. You can simply do it pasting into the terminal `git clone https://valentinoita@bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit.git` or just downloading it manually from the link. After the download open the terminal and navigate to the directory you've saved the file in ( `Downloads/best-of-reddit-special-automate-best-of-reddit` maybe?) and run the script `python gettop25subweekly.py` \[Yes, at the moment it scrapes the TOP 3 only, but at its inception it used to be the top 25\. For how to force the "inception" behavior check [here][16]. \]

Wait a few minutes (usually around 50s on my 3 years old MacBook Air) and close the terminal window only after `Done!` is printed in the console. Open again the folder and you'll find your txt file in the same directory.

## Input Files

The content of the repository is as follows:

`  
gettop25subweekly.py  
Last_Time.txt  
subs.txt  
Template.txt  
`

* `gettop25subweekly.py` is the actual script file, more on it later...
* `Last_Time.txt` is updated after every run and it contains the number of the previous issue (set to 12 at the moment).
* `subs.txt` is the list (one item each line) of the subreddits to parse. It contains the name of the subreddits --- one per line --- not the URL[^3].
* `Template.txt` is the header for the txt file that will get generated, you can modify it as you wish, just make sure not to touch the first line. That's because the x is going to get replaced by the current number of the "Issue --- " if you don't want that to happen let me know and I'll update it.

## Output files

The generated file is like this:

`>Introduction`

`**Subreddit Name** `

`- [link1][18]`

* [link2][18]
* [link3][18]

The pattern, apart from the Introduction, repeats for how many subreddits you have in your `subs.txt` file. Mind that the file only contains the links to the articles and not the titles, since I want to personally write them with my own thoughts in it, so you would want to fill it in if you're interested.

## Extras

Easter egg (well not really an easter egg, cause it's hidden in plain sight and I'm talking about it here):  
- The script is titled as "top25" even though it's configured as top 3 at the moment. Having a top 25 for each subreddit every week seemed way too overkill. Of course it can always be changed by changing the `NUMBER_OF_THREAD_TO_PARSE = 3` line with a different number.

## Run it

To run it at a specific time (every week) I set up an action with Keyboard Maestro to run it as shell script [^4].

![Keyboard Maestro Macro]({{ site.baseurl }}/assets/article_images/KeyboardMaestro%20-%20Best%20of%20Reddit.png)

The shell script is really bread and butter, just a cd and run:

    
    #! /bin/bash       
    cd ~/PATH TO FOLDER/     
    python gettop25subweekly.py
    

If you have both python2 and 3 on the same machine you can specify which one you want to run,`python` is going to fire off python 2, while `python3` is going to fire off python 3\. So for example: `python3 gettop25subweekly.py` would just start the script with python 3\.

Of course you can run it manually, or you can also past the shell script in keyboard maestro's run shell script. Just remember that if you use the script (.sh) file from Terminal you need to either pass `bash SCRIPT_NAME` or set its permissions to execute with `sudo chmod 775 SCRIPT_NAME`.

## Issues

If you run through an Issue make sure to open an `Issue` on [Bitbucket][20] and **only on Bitbucket**. I will not reply to, nor provide any kind of support to any Issue sent by email. Please remember that I'm releasing this tool for free and it comes with no support whatsoever. You can open an Issue if you like, but don't assume anything. Or if you feel adventurous you can always fix it yourself and request a `pull request` ;) (recommended).

**For a list of known Issues look [here][21].**

## The Actual Script

The script below is just a mirror of what's hosted on bitbucket.

### [Up to date script.][22]

### Instructions

**\[Updated for version 1.1 --- march 30, 2015\]**

The instructions are valid for version 1.0 1.1 of the script, please understand that they may not be up to date anymore. You can always check the current version of the script [here][23]

The code pasted below is **not** updated and won't be maintained. Always use the code above if you want to copy and paste it somewhere (you really should use ` git clone https://valentinoita@bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit.git` instead).

**Mind the indentation. To get a copy clone the repository linked in this page following the instructions above or copy the code above marked as up to date. DO NOT COPY ANY CODE FROM BELOW THIS LINE.**

Yes, better repeating it three times than zero. Let's finally get to the code.

#### Copyright: myshar.org - Valentino Urbano

    
    
    #Copyright: myshar.org
    import datetime
    import praw
    #CONFIG:
    NUMBER_OF_THREAD_TO_PARSE = 3
    
    def parse_reddit():
        r = praw.Reddit(user_agent="Best Of Reddit 1.0 - myshar.org")
        subs = []
        with open("subs.txt", "r") as textfile:
            for each in textfile:
                each = each[:-1]
                subs.append(each)
        for each in subs:           
            sub_content = r.get_subreddit(each)
            array = []
            array.append(str(each))
            for post in (sub_content.get_top_from_week(limit=NUMBER_OF_THREAD_TO_PARSE)):#default=25
                array.append(post.url)
            data.append(array)
    
    def check_txt_file():
        textfile = open("Last_Time.txt", "r+")
        try:
            time = int(textfile.readline()) + 1
            textfile.close()
    
            textfile = open("Last_Time.txt", "r+")
            textfile.truncate()
            textfile.write(str(time))
            textfile.close()
        except Exception:
            raise Exception("ERROR - CHECK Last_Time.txt")
    
        return time
    
    def create_txt_file(data):
        with open (title, "w+") as textfile:
            insert_first_line(time_count)
            lines = insert_template()
            for each in lines:
                textfile.write(each)
            for each in data:
                for items in each:
                    if (items[0] != "h"):
                        textfile.write(" \n \n \n")
                        textfile.write("**" + items[0].upper() + items[1:] + "**" + " \n \n")#uppercase first letter
                    else:
                        textfile.write("- [](" + items + ")" + " \n")
    
    def insert_first_line(time_count):
        with open ("Template.txt", "r") as textfile:
            first_line = textfile.readline()
            first_line = first_line.replace("x", str(time_count))
        return first_line
    
    def insert_template():
        with open ("Template.txt", "r") as textfile:
            lines = textfile.readlines()[1:]
        return lines
    def main():
        if (datetime.datetime.today().weekday()) == 4:
            data = []
            print ("Parsing data from reddit, it'll take a few minutes...")
            parse_reddit()
            print ("Creating txt file...")
            time_count = check_txt_file()
            print ("Writing txt file...")
            title = "Best of Reddit - Issue" + str(time_count) + ".txt"
            create_txt_file(data)
            print ("Done!")
        else:
            print ("It's not Friday.")
    if __name__ == '__main__':
        main()
    
    

#### Line by line

In addiction to praw I'm also importing `datetime`, but it's not really [fair][14] counting it as dependency.

In line 5 you can change how many posts the "bot" is going to parse (default is 3). Lines 47,48 and line 50 respectively write to a new file the subreddit name in bold (minding to Uppercase the first letter of it) and `- ` for every item parsed. That's basically it. If you don't want a header you can delete or comment out (with `#` at every start of the line) line 41,42 and 43\.

Line 5--20 `parse_reddit()`:  
Provides a "User Agent" string as required by [Reddit APIs][9] and parses the content of `subs.txt`. After that it gets all the links in the top x weekly for the specified subreddits and stores them as well.

Line 22--35 `check_txt_file()`:  
Checks the `Last_Time.txt` file and gets the number of the last Issue, it increments it by one and it stores it. If the file can't be read or doesn't contain a number it shows an error message.

Line 37--49 `create_txt_file()`:  
Creates the new txt file, adds in the Template and starts adding formatted links (one per line).

Line 51--55 `insert_first_line()`:  
Reads from `Template.txt` and replaces the x with the current number of the Issue.

Line 57--60 `insert_template()`:  
Reads again from `Template.txt`, this time from the second line onwards.

Line 61--75 `main()`:  
This is what gets called when the script launches. First it checks if it's Friday, if not it does nothing. If it is it fires off the script and creates the new populated txt files. If you want it to work any day of the week just remove line 62,72 and 73\. Respectively:  
`if (datetime.datetime.today().weekday()) == 4:  
else:  
print (“It’s not Friday.”)  
`

## FAQ

This section will be updated as I get asked more questions.

-

This is the first piece of code that I release to the world, so be wary of that. Thanks to [Brett Terpstra][24] for the inspiration.

You can find the repository on [Bitbucket][15].[^5]

---

[^1]: I haven't updated it to pip, since it's just one .py file and it doesn't require anything more than praw to function. If there is the interest for me to post it there and package it up I'll likely do it, just let me know.  

[^2]: You may notice that I'm also importing `datetime` ([Docs][27]) to let it only run on Fridays only, but that's a standard python library both in 2.x and 3.x .
[^3]: Yes, those are the actual subreddits I check for this column. You can always suggest more and submit a pull request ;)
[^4]: Nope I'm not using github and I'm not going to use it [anytime][30] [soon][31] and nope, I'm not going to discuss any of this further.
[^5]: Since I wanted to run it from a specific folder every time and I'm too lazy to set it up as a variable.

---

## License

The script is released under [MIT][34] license.  
Copyright (c) 2015 Valentino Urbano, http://myshar.org

    
    Permission is hereby granted, free of charge, to any person obtaining
    a copy of this software and associated documentation files (the
    “Software”), to deal in the Software without restriction, including
    without limitation the rights to use, copy, modify, merge, publish,
    distribute, sublicense, and/or sell copies of the Software, and to
    permit persons to whom the Software is furnished to do so, subject to
    the following conditions:
    
    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    



[0]: https://bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit "Best of Reddit"
[9]: https://www.reddit.com/dev/api
[10]: http://daringfireball.net/projects/markdown/
[11]: http://www.keyboardmaestro.com/documentation/6/actions.html#actions_overview
[13]: https://praw.readthedocs.org/en/
[15]: https://bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit
[20]: https://bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit/issues/new
[21]: https://bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit/issues
[22]: https://bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit/
[23]: https://bitbucket.org/valentinoita/best-of-reddit-special-automate-best-of-reddit/commits/all
[24]: http://brettterpstra.com/projects/
[27]: https://docs.python.org/2/library/datetime.html
[30]: http://techcrunch.com/2014/03/16/github-julie-ann-horvath-response/
[31]: http://techcrunch.com/2014/04/21/github-denies-allegations-of-gender-based-harassment-co-founder-preston-werner-resigns
[34]: http://opensource.org/licenses/MIT