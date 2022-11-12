import {Center, Heading, HStack} from "@chakra-ui/react";
import {FaTiktok, FaInstagram, FaYoutube, FaFacebook, FaBars} from "react-icons/fa";
import Link from "next/link";
import {FC} from "react";
import {ICreator} from "../interfaces";

export const CoverPhoto: FC<{creatorDetail: ICreator}> = ({creatorDetail}) => {
  return (

        <Center
          color={"white"}
          position={"relative"}
          width={"full"}
          backgroundColor={"brand.700"}
          height={"200px"}
        >
          <Heading>I am {creatorDetail.firstName}.</Heading>
          <HStack
            position={"absolute"}
            bottom={"1rem"}
            right={"2rem"}
            gap={"0.5rem"}
          >
            {creatorDetail.handles.tiktok && (
              <Link
                href={`https://tiktok.com/@${creatorDetail.handles.tiktok}`}
              >
                <FaTiktok size={20} />
              </Link>
            )}

            {creatorDetail.handles.instagram && (
              <Link
                href={`https://instagram.com/${creatorDetail.handles.instagram}`}
              >
                <FaInstagram size={20} />
              </Link>
            )}
            {creatorDetail.handles.youtube && (
              <Link
                href={`https://youtube.com/${creatorDetail.handles.youtube}`}
              >
                <FaYoutube size={20} />
              </Link>
            )}
            {creatorDetail.handles.facebook && (
              <Link
                href={`https://facebook.com/${creatorDetail.handles.facebook}`}
              >
                <FaFacebook size={20} />
              </Link>
            )}
            {creatorDetail.handles.other && (
              <Link href={`${creatorDetail.handles.other}`}>
                <FaBars size={20} />
              </Link>
            )}
          </HStack>
        </Center>
  )
}
