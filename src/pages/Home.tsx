import { Header } from "@/components/Header";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Home() {
  return (
    <div>
      <Header />
      <section className="flex flex-col items-center justify-center gap-12 px-8 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-semibold">What's happening in Moncton</h1>
          <h3 className="text-xl text-neutral-600">Discover exciting events happening near you</h3>
        </div>

        <div className="flex items-center justify-center gap-20">
          <div>
            <Button>Free and paid</Button>
            <Button>Only free</Button>
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
      </div>
  )
}