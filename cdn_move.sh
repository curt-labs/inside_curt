#!/bin/sh

if [ $1 ]
then
    # gsutil rm gs://curt-video/Inside_CURT_2013/$1_2013/index.html
    # gsutil mv gs://curt-video/Inside_CURT_2013/$1_2013/index.files/$1_2013.jpg gs://curt-video/Inside_CURT_2013/$1_2013/$1.jpg
    # gsutil mv gs://curt-video/Inside_CURT_2013/$1_2013/index.files/$1_2013.mp4 gs://curt-video/Inside_CURT_2013/$1_2013/$1.mp4
    # gsutil mv gs://curt-video/Inside_CURT_2013/$1_2013/index.files/$1_2013.webm gs://curt-video/Inside_CURT_2013/$1_2013/$1.webm
    # gsutil mv gs://curt-video/Inside_CURT_2013/$1_2013/index.files/$1_2013.ogv gs://curt-video/Inside_CURT_2013/$1_2013/$1.ogv
    gsutil -m mv gs://curt-video/Inside_CURT_2013/$1_2013 gs://curt-video/Inside_CURT_2013/$1
else
    echo "No name specified"
fi