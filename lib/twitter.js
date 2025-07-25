import querystring from 'querystring'

export const getTweets = async (ids) => {
  if (ids.length === 0) {
    return []
  }

  const queryParams = querystring.stringify({
    ids: ids.join(','),
    expansions:
      'author_id,attachments.media_keys,referenced_tweets.id,referenced_tweets.id.author_id',
    'tweet.fields':
      'attachments,author_id,public_metrics,created_at,id,in_reply_to_user_id,referenced_tweets,text',
    'user.fields': 'id,name,profile_image_url,protected,url,username,verified',
    'media.fields': 'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics',
  })

  const response = await fetch(`https://api.twitter.com/2/tweets?${queryParams}`, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  })
  if (!response.ok) {
    console.error('Failed to fetch tweets:', response.status, response.statusText)
    return []
  }
  const tweets = await response.json()

  const getAuthorInfo = (author_id) => {
    return tweets.includes.users?.find((user) => user.id === author_id)
  }

  const getReferencedTweets = (mainTweet) => {
    return (
      mainTweet?.referenced_tweets?.map((referencedTweet) => {
        const fullReferencedTweet = tweets.includes.tweets?.find(
          (tweet) => tweet.id === referencedTweet.id
        )

        return {
          type: referencedTweet.type,
          author: getAuthorInfo(fullReferencedTweet.author_id),
          ...fullReferencedTweet,
        }
      }) || []
    )
  }

  return tweets.data.reduce((allTweets, tweet) => {
    const tweetWithAuthor = {
      ...tweet,
      media:
        tweet?.attachments?.media_keys.map((key) =>
          tweets.includes.media.find((media) => media.media_key === key)
        ) || [],
      referenced_tweets: getReferencedTweets(tweet),
      author: getAuthorInfo(tweet.author_id),
    }

    return [tweetWithAuthor, ...allTweets]
  }, [])
}

export const getUser = async (username) => {
  const url = `https://api.twitter.com/2/users/by/username/${username}?user.fields=created_at,description,profile_image_url,public_metrics`
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    },
  })
  const data = await response.json()
  return data
}
