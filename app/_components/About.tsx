import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const about = [
  `A <strong>Frontend Engineer</strong>, passionate about AI. 
   Wrote my first line of code in <strong>2022</strong>.
   I stress my brain by solving `,
];

const About = () => {
  return (
    <Flex direction="column" gap="4">
      <Flex align="center" direction="column" gap="2" className="text-neutral-400 !leading-loose">
        <Text size="2" wrap="pretty" className="text-neutral-400 !leading-7 tracking-wide!">
          <Text dangerouslySetInnerHTML={{ __html: about }} />
          <Text>
            <Link
              href="https://leetcode.com/u/Pranay_Dutta"
              className="hover:text-blue-200 border-b border-dashed border-gray-700"
              target="_blank"
            >
              Data structures and Algorithms at LeetCode <FiExternalLink className="inline-block mb-1" />
            </Link>
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
