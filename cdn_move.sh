#!/bin/sh

declare -a arr=(CompanyVision Distribution Electrical Engineering Fabrication Finishing First_to_Market IT Montage_Introduction Quality Welding eCom)
# declare -a arr=(CompanyVision)

for i in ${arr[@]}
do
	N=$i
	gsutil mv gs://curt-video/Inside_CURT_2013/$N/.jpg gs://curt-video/Inside_CURT_2013/$N/${i}_1080.jpg
    gsutil mv gs://curt-video/Inside_CURT_2013/$N/.mp4 gs://curt-video/Inside_CURT_2013/$N/${i}_1080.mp4
    gsutil mv gs://curt-video/Inside_CURT_2013/$N/.ogv gs://curt-video/Inside_CURT_2013/$N/${i}_1080.ogv
    gsutil mv gs://curt-video/Inside_CURT_2013/$N/.webm gs://curt-video/Inside_CURT_2013/$N/${i}_1080.webm
done
