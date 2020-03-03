// include express in order to use methods like .Router()
const express = require('express');
// reference to the videos file in order to write using writeJSONFile
const videosFile = __dirname + '/../../models/videos.json';
// work with array of data 
const videos = require(videosFile);
// helper functions: writeJSONFile & getNewId
const helper = require('../../helper/helper');
// setup express router
const router = express.Router();

/**
 * Get all the videos from file
 */
router.get('/', (req, res) => {
  const videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
      description: video.description,
      views: video.views,
      likes: video.likes,
      duration: video.duration,
      video: video.video,
      timestamp: video.timestamp,
      comments: video.comments
    };
  });
  res.json(videoList);
});

/**
 * Get video by id
 */
router.get('/:id', (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    res.json(videos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `video with ID:${req.params.id} not found` });
  }
});

/**
 * Post new video
 */
router.post('/', (req, res) => {
  newId = helper.getNewId();

  const newvideo = {
    id: newId,
    title: req.body.title,
    channel: req.body.channel,
    image: req.body.image,
    description: req.body.description,
    views: 0,
    likes: 0,
    duration: "1:00",
    video: null,
    timestamp: helper.timestamp(),
    comments: []
  };
  if (!newvideo.title || !newvideo.description) {
    return res.status(400).json({
      errorMessage:
        'Please provide title and description for the video'
    });
  }
  videos.push(newvideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(newId);
});

// /**
//  *  update video with :id
//  */
// router.put('/:id', (req, res) => {
//   const found = videos.some(video => video.id === req.params.id);
//   if (found) {
//     videos.forEach(video => {
//       if (video.id === req.params.id) {
//         video.title = req.body.title ? req.body.title : video.title;
//         video.description = req.body.description
//           ? req.body.description
//           : video.description;
//         video.image = req.body.image ? req.body.image : video.image;
//       }
//     });
//     helper.writeJSONFile(videosFile, videos);
//     res.json({ msg: 'video Updated', videos: videos });
//   } else {
//     res
//       .status(404)
//       .json({ errorMessage: `video with ID: ${req.params.id} not found` });
//   }
// });

/**
 * Delete message
 */
// axios.delete(`/api/videos/${id}/comments/${commentId}`)
// router.delete('/:id/comments/:commentId', (req, res) => {
//   // const found = messages.some(message => message.id === req.params.id);
//   // if (found) {
//   const videosAfterDeletion = videos.filter(video => video.id !== req.params.id);
//   // helper.writeJSONFile(videosFile, videosAfterDeletion);
//   res.json({
//     msg: `comment with ID: ${req.params.commentId} Deleted`,
//     // videos: videosAfterDeletion
//   });
//   // } else {
//   //   res
//   //     .status(404)
//   //     .json({ errorMessage: `message with ID: ${req.params.id} not found` });
//   // }
// });

module.exports = router;
