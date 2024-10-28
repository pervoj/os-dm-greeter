import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";
import { CircleUser } from "lucide-react";
import { greeter_config, LightDMUser } from "nody-greeter-types";
import { useEffect, useState } from "react";

export default function UserGridItem({
  user,
  width,
}: {
  user: LightDMUser;
  width: number;
}) {
  const image = user.image ?? greeter_config?.branding?.user_image;

  const [colors, setColors] = useState<FinalColor[]>([]);

  useEffect(() => {
    extractColors(user.image, {
      colorValidator: (r, g, b) => {
        const validate = (c: number) => c > 20 && c < 235;
        return validate(r) && validate(g) && validate(b);
      },
    }).then((colors) => {
      setColors(colors.sort((a, b) => b.area - a.area));
    });
  }, [user]);

  function getBgImage() {
    function getGradient(a: FinalColor, b: FinalColor) {
      return `linear-gradient(45deg, ${a.hex}, ${b.hex})`;
    }

    if (!colors.length) return undefined;
    if (colors.length == 1) return getGradient(colors[0], colors[0]);
    return getGradient(colors[0], colors[1]);
  }

  // [:has(:hover)_>_&:not(:hover)]:opacity-70 transition-opacity

  return (
    <button
      className="group relative isolate grid cursor-pointer overflow-hidden rounded-xl bg-white/5 shadow focus:outline-none focus-visible:ring"
      style={{ width, backgroundImage: getBgImage() }}
    >
      <div className="mx-auto p-8">
        <div className="block size-32 overflow-hidden rounded-full bg-white/10 shadow">
          {image ? (
            <img
              src={image}
              alt=""
              className="block size-full"
              draggable="false"
            />
          ) : (
            <div className="grid size-full place-content-center opacity-50">
              <CircleUser className="size-12" />
            </div>
          )}
        </div>
      </div>
      <div className="truncate bg-black/30 p-4 text-center text-xl font-semibold leading-none">
        {user.display_name || user.username}
      </div>
      <div className="absolute inset-0 -z-10 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"></div>
    </button>
  );
}
