import tinify
tinify.key = "ByxBoyxbDYigjBW61tWieDRIgblgDIE2"
source = tinify.from_file("resume.png")
source = source.resize(
    method="fit",
    width=850,
    height=1100
)
source.to_file("resume2.png")
source = tinify.from_file("resume2.png")
source.to_file("resume2.png")
source = tinify.from_file("resume2.png")
source.to_file("resume2.png")
