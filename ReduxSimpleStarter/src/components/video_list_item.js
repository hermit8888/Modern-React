import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // putting {video} as a function property above
  // is the same as: const video = props.video;
  // in the block.
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <img className="media-object" src={imageUrl} alt="" />
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
