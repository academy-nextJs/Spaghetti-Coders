import { MyChip } from "@/src/components/common/Buttons/Chip-btn";
import { ClientButton } from "@/src/components/common/Buttons/common-btn";
import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { CommentList } from "./commentList/CommentList";
import api from "@/src/services/api";

export async function DetailCommentContainer({ ID }: { ID: string }) {
  const { data: comments } = await api.get(`/houses/${ID}/comments?page=1&limit=10`);
  return (
    <section className="max-w-full md:max-w-1/2 flex flex-col gap-12">
      <div className="flex gap-4">
        <MyChip size="lg" className="bg-transparent border border-[#7575FE] text-[#7575FE] px-3">
          نظرات کاربران
        </MyChip>
        <ClientButton size="lg" className="bg-transparent text-[#7575FE] px-1 h-auto">
          <HugeiconsIcon icon={PlusSignIcon} />
          نظر شما
        </ClientButton>
      </div>
      <CommentList comments={comments} />
    </section>
  );
}