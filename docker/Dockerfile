# Run environmap on port 8000
#
# Requires the environmap project to be mounted at the /environmap volume.
#
# You can edit source code in this volume while this docker image runs to
# get live feedback.

FROM node:6
EXPOSE 8000
VOLUME /environmap
WORKDIR /environmap
USER node
CMD npm install; exec npm start
