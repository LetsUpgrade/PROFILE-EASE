![Profile Ease](https://user-images.githubusercontent.com/22274195/94831951-f5912600-042a-11eb-912c-f11c20315c9d.png)
# Profile Ease
Profile Ease will be a chrome extension which seeks to reduce the time users spend browsing social media websites. Users moslty browse a lot of content everytime they were just there to check in some notifications.

# Docs
## Getting started
* Fork this repository (Click the Fork button in the top right of this page, click your Profile Image)
* Clone your fork down to your local machine

```markdown
git clone https://github.com/your-username/repository_name.git
```

* Create a branch

```markdown
git checkout -b branch-name
```

* Make your changes (choose from any task below)
* Commit and push

```markdown
git add .
git commit -m 'Commit message'
git push origin branch-name
```

* Create a new pull request from your forked repository (Click the `New Pull Request` button located at the top of your repo)
* Wait for your PR review and merge approval!

## APIs used 
* [Twitter API](https://developer.twitter.com/en/docs)
* [Reddit API](https://www.reddit.com/dev/api/)
* [Line API](https://developers.line.biz/en/)

Their are a lot of social media platforms but sadly due to privacy issues these do not provide free APIs.
 
## Design
 ![Design](https://user-images.githubusercontent.com/22274195/94824571-cecef180-0422-11eb-8c58-643866e0de63.png)
 
## Reddit 

 We looked into what people are doing on reddit the most & condensed it down to 3 functions
 
#### About User

 ```
GET https://oauth.reddit.com/api/v1/me

```
##### Request

 | header        	| Value               	|
 |---------------	|---------------------	|
 | authorization 	| user-access-token 	|
 | content-type  	| application/json    	|

##### Response

 | attribute        	| Value             |
 |---------------	|---------------------	|
 | icon_img 	| user-image 	|
 | display_name_prefixed  	| user-display-name    	|
 | public_description  	| user-public-description    	|
 | karma  	| user-karma    	|

### Top Posts

 ```
GET https://oauth.reddit.com/best

 ```
 ##### Request
 
| header        	| Value               	|
|---------------	|---------------------	|
| authorization 	| user-access-token 	|
| content-type  	| application/json    	|

##### Response

| attribute        	| Value               	|
|---------------	|---------------------	|
| children	| feed-posts 	|
 
### Direct Messages
 
 ```
 GET https://oauth.reddit.com/message/inbox
 ```
 
##### Request

| header        	| Value               	|
|---------------	|---------------------	|
| authorization 	| user-access-token 	|
| content-type  	| application/json    	|

##### Response
 
| attribute        	| Value               	|
|---------------	|---------------------	|
| author	| message-sender 	|
| subject	| message-subject  	|
| body	| message-body 	|



## Twitter

We looked into what people are doing on twitter the most & condensed it down to 4 functions

#### Searching tweet

 ```
GET https://api.twitter.com/1.1/search/tweets.json

```

##### Resource Information
             	
| Response formats | JSON |
| Requires authentication? |	Yes |
| Rate limited?	| Yes |
| Requests / 15-min window (user auth)	| 180 |
| Requests / 15-min window (app auth) |	450 |

##### Parameters

| Name		        	| Required             | Description              |
|---------------	|---------------------	| ------------------------ |
| q	| required | A UTF-8, URL-encoded search query |
| count	| optional | The number of tweets to return per page |


#### Posting tweet

```
POST https://api.twitter.com/1.1/statuses/update.json

```

##### Resource Information
             	
| Response formats | JSON |
| Requires authentication? |	Yes (user context only) |
| Rate limited?	| Yes |
| Requests / 3-hour window	| 300* per user; 300* per app |

##### Parameters

| Name		        	| Required             | Description              |
|---------------	|---------------------	| ------------------------ |
| status |	required | The text of the status update |


#### Searching profile 

```
GET https://api.twitter.com/1.1/users/search.json

```

##### Resource Information
             	
| Response formats | JSON |
| Requires authentication? |	Yes (user context only) |
| Rate limited?	| Yes |
| Requests / 15-min window (user auth)	| 900 |

##### Parameters

| Name		        	| Required             | Description              |
|---------------	|---------------------	| ------------------------ |
| q	| required | The search query to run against people search. |
| count |	optional | The number of potential user results to retrieve per page. This value has a maximum of 20. |

#### Following user

```
POST https://api.twitter.com/1.1/friendships/create.json

```

##### Resource Information

| Response formats |	JSON |
| Requires authentication?	| Yes (user context only) |
| Rate limited?	| Yes |
| Requests / 24-hour window	| 400 per user; 1000 per app |

##### Parameters

| Name		        	| Required             | Description              |
|---------------	|---------------------	| ------------------------ |
| screen_name	| optional	| The screen name of the user to follow. |












