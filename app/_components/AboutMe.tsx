import { Flex, Text } from "@radix-ui/themes";
import { Highlight } from "./HighLight";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const about = [
  `A Frontend Engineer, passionate about AI. 
   Wrote my first line of code in 2022.
   I stress my brain by solving `,
];

const About = () => {
  return (
    <Flex direction="column" gap="4">
      <Flex align="center" gap="2" className="text-neutral-400 !leading-loose">
        {about.map((about, index) => (
          <Text size="2" className="text-neutral-400 !leading-7 tracking-wide!" key={index}>
            <Highlight
              styles={{ color: "#ccc", backgroundColor: "transparent" }}
              query={["Frontend Engineer", "2022"]}
              key={index}
            >
              {about}
            </Highlight>
            <Link
              href="https://leetcode.com/u/Pranay_Dutta"
              className="hover:text-yellow-200 border-b border-dashed border-gray-700"
              target="_blank"
            >
              <Text>
                Data structures and Algorithms at LeetCode <FiExternalLink className="inline-block mb-1" />
              </Text>
            </Link>
          </Text>
        ))}
      </Flex>

    </Flex>
  );
};

export default About;
