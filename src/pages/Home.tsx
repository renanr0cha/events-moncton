import { ButtonGroup } from "@/components/ButtonGroup";
import { EventCard } from "@/components/Card";
import { Header } from "@/components/Header";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface ButtonOption {
  value: string;
  label: string;
}

export function Home() {
  const [selectedOption, setSelectedOption] = useState<string>('Free and paid');
  
  const options: ButtonOption[] = [
    { value: "Free and paid", label: "Free and paid" },
    { value: "Only free", label: "Only free" },
  ];

  const handleChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center gap-12 px-8 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-4xl font-semibold">What's happening in Moncton</h1>
          <h3 className="text-center text-xl text-neutral-600">Discover exciting events happening near you</h3>
        </div>

        <div className="flex flex-col gap-8 md:flex-row items-center justify-center md:gap-20">
          <div>
            <ButtonGroup
              options={options}
              defaultValue={selectedOption}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <span>See events from</span>
            <Select defaultValue="jun">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select a Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a Month</SelectLabel>
                  <SelectItem value="jun">June</SelectItem>
                  <SelectItem value="jul">July</SelectItem>
                  <SelectItem value="aug">August</SelectItem>
                  <SelectItem value="sep">September</SelectItem>
                  <SelectItem value="oct">October</SelectItem>
                  <SelectItem value="nov">November</SelectItem>
                  <SelectItem value="dec">December</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 sm:px-14 px-8 gap-10">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
      </section>
      <Pagination className="px-8 py-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <footer className="flex items-center justify-between px-8 sm:px-16 py-8">
        <div className="flex items-center justify-center gap-2">
          <svg width="43" height="30" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Logomark">
            <path id="Isometric square" d="M12.9138 13.8788C13.7135 11.8333 16.781 9.73066 19.7652 9.18249L38.3701 5.76491C41.3543 5.21674 43.1252 6.43057 42.3254 8.47608L37.3395 21.2287C36.5398 23.2742 33.4723 25.3768 30.4881 25.925L11.8832 29.3426C8.89896 29.8908 7.1281 28.6769 7.92784 26.6314L12.9138 13.8788Z" fill="#9E77ED"/>
            <path id="Isometric square_2" d="M5.45517 8.76623C6.25491 6.72071 9.3224 4.61812 12.3066 4.06994L30.9115 0.65236C33.8957 0.104184 35.6666 1.31802 34.8669 3.36353L29.8809 16.1162C29.0812 18.1617 26.0137 20.2643 23.0295 20.8125L4.42459 24.23C1.44038 24.7782 -0.330484 23.5644 0.469253 21.5189L5.45517 8.76623Z" fill="#6941C6"/>
            </g>
          </svg>
          <svg width="87" height="19" viewBox="0 0 87 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Logotype">
            <path d="M4.83849 11.1421H10.9387V13.6061H0.181671V0.502136H4.83849V11.1421Z" fill="#101828"/>
            <path d="M11.6893 8.37947C11.6893 7.30925 11.9797 6.36969 12.5607 5.5608C13.1598 4.75191 13.9677 4.12969 14.9844 3.69414C16.0011 3.25858 17.1358 3.0408 18.3886 3.0408C19.4597 3.0408 20.3947 3.19014 21.1935 3.4888C22.0105 3.78747 22.6369 4.17947 23.0726 4.6648V3.19014H27.7294V13.6061H23.0726V12.1315C22.6187 12.6168 21.9833 13.0088 21.1663 13.3075C20.3675 13.6061 19.4325 13.7555 18.3613 13.7555C17.1268 13.7555 16.0011 13.5377 14.9844 13.1021C13.9677 12.6541 13.1598 12.0257 12.5607 11.2168C11.9797 10.3955 11.6893 9.44969 11.6893 8.37947ZM23.0726 8.39814C23.0726 7.60169 22.7458 6.97325 22.0922 6.5128C21.4568 6.05236 20.6761 5.82214 19.7502 5.82214C18.8243 5.82214 18.0345 6.05236 17.3809 6.5128C16.7455 6.9608 16.4278 7.58303 16.4278 8.37947C16.4278 9.17591 16.7455 9.81058 17.3809 10.2835C18.0345 10.7439 18.8243 10.9741 19.7502 10.9741C20.6761 10.9741 21.4568 10.7439 22.0922 10.2835C22.7458 9.82303 23.0726 9.19458 23.0726 8.39814Z" fill="#101828"/>
            <path d="M46.0765 3.19014L36.545 18.5528H31.5342L35.02 13.2515L28.8381 3.19014H34.0396L37.5526 9.7048L41.0384 3.19014H46.0765Z" fill="#101828"/>
            <path d="M61.5403 8.23014C61.5403 8.5288 61.5131 8.83991 61.4586 9.16347H50.9195C50.9921 9.81058 51.2917 10.3084 51.8182 10.6568C52.3628 10.9928 53.0255 11.1608 53.8062 11.1608C54.9681 11.1608 55.776 10.8248 56.2299 10.1528H61.1863C60.9321 10.8372 60.4692 11.4532 59.7974 12.0008C59.1438 12.5484 58.3178 12.9777 57.3192 13.2888C56.3207 13.5999 55.2041 13.7555 53.9696 13.7555C52.4809 13.7555 51.1555 13.5377 49.9936 13.1021C48.8316 12.6666 47.9239 12.0444 47.2703 11.2355C46.6167 10.4266 46.2899 9.4808 46.2899 8.39814C46.2899 7.31547 46.6076 6.36969 47.2431 5.5608C47.8967 4.75191 48.8044 4.12969 49.9663 3.69414C51.1283 3.25858 52.4627 3.0408 53.9696 3.0408C55.4402 3.0408 56.7473 3.25236 57.8911 3.67547C59.0349 4.09858 59.9245 4.70214 60.5599 5.48614C61.2135 6.27014 61.5403 7.1848 61.5403 8.23014ZM56.7746 7.39014C56.7746 6.84258 56.5022 6.40703 55.9576 6.08347C55.4129 5.75991 54.7321 5.59814 53.9151 5.59814C53.1344 5.59814 52.4718 5.75369 51.9271 6.0648C51.4006 6.37591 51.0738 6.81769 50.9467 7.39014H56.7746Z" fill="#101828"/>
            <path d="M68.1092 4.92614C68.6539 4.35369 69.3347 3.90569 70.1517 3.58214C70.9686 3.24614 71.8764 3.07814 72.875 3.07814V6.4568H71.595C70.4331 6.4568 69.5616 6.63103 68.9806 6.97947C68.3997 7.31547 68.1092 7.9128 68.1092 8.77147V13.6061H63.4524V3.19014H68.1092V4.92614Z" fill="#101828"/>
            <path d="M80.738 13.7555C79.4127 13.7555 78.2326 13.5999 77.1977 13.2888C76.1629 12.9777 75.3459 12.5546 74.7468 12.0195C74.1477 11.4719 73.8118 10.8621 73.7392 10.1901H78.3415C78.396 10.551 78.6411 10.8435 79.0768 11.0675C79.5125 11.2915 80.0481 11.4035 80.6835 11.4035C81.2645 11.4035 81.7093 11.3288 82.018 11.1795C82.3447 11.0177 82.5082 10.8124 82.5082 10.5635C82.5082 10.2648 82.2812 10.047 81.8273 9.91014C81.3734 9.7608 80.6382 9.59903 79.6215 9.4248C78.5321 9.25058 77.6244 9.07014 76.8982 8.88347C76.172 8.68436 75.5456 8.37947 75.0191 7.9688C74.4926 7.54569 74.2294 6.97947 74.2294 6.27014C74.2294 5.6728 74.4654 5.13147 74.9374 4.64614C75.4276 4.14836 76.1357 3.75636 77.0616 3.47014C78.0056 3.18391 79.1222 3.0408 80.4112 3.0408C82.3175 3.0408 83.8153 3.36436 84.9046 4.01147C86.0121 4.65858 86.6475 5.51725 86.8109 6.58747H82.5082C82.4355 6.22658 82.1995 5.94036 81.8001 5.7288C81.4188 5.51725 80.9105 5.41147 80.275 5.41147C79.7304 5.41147 79.3128 5.48614 79.0223 5.63547C78.7319 5.77236 78.5866 5.96525 78.5866 6.21414C78.5866 6.5128 78.8136 6.7368 79.2674 6.88614C79.7395 7.03547 80.4657 7.1848 81.4461 7.33414C82.5717 7.53325 83.4885 7.73236 84.1966 7.93147C84.9046 8.11814 85.5219 8.42925 86.0484 8.8648C86.5931 9.28791 86.8745 9.86036 86.8926 10.5821C86.8926 11.1919 86.6385 11.7395 86.1301 12.2248C85.6399 12.6977 84.9228 13.071 83.9787 13.3448C83.0528 13.6186 81.9726 13.7555 80.738 13.7555Z" fill="#101828"/>
            </g>
          </svg>
        </div>
        <span>
          © 2024 C3 Dev
        </span>
      </footer>
      </div>
  )
}