import tinify
tinify.key = "ByxBoyxbDYigjBW61tWieDRIgblgDIE2"
source = tinify.from_file("resume.png")
source = source.resize(
    method="fit",
    width=850,
    height=1100
)
source.to_file("resume.png")
source = tinify.from_file("resume.png")
source.to_file("resume.png")
source = tinify.from_file("resume.png")
source.to_file("resume.png")
