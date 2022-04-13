<template>
  <div class="q-pa-md q-ma-xs col-12 justify-center">
    <div>
      <q-responsive :ratio="1">
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          :separator="separator"
          virtual-scroll
          :rows-per-page-options="[48]"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                class="sdd"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
          <template v-slot:body-cell-priority="props">
            <q-td :props="props">
              <div>
                <q-badge
                  :label="props.value"
                  :class="
                    props.value === 'High'
                      ? 'priority-high '
                      : 'bg-white text-black' && props.value === 'Low'
                      ? 'priority-low '
                      : 'bg-white text-black' && props.value === 'Medium'
                      ? 'priority-medium '
                      : 'bg-white text-black'
                  "
                >
                </q-badge>
              </div>
            </q-td>
          </template>
          <template v-slot:body-cell-Id="props">
            <q-td :props="props" class="sdd pontr" @click="GetDetails()">
              <div>
                <q-badge class="sdd" :label="props.value"></q-badge>
              </div>
            </q-td>
          </template>
          <template v-slot:body-cell-details="props">
            <q-td :props="props" class="pontr" @click="GetDetails()">
              <div>
                <q-badge :label="props.value"></q-badge>
              </div>
            </q-td>
          </template>
          <template v-slot:body-cell-statusId="props">
            <q-td :props="props">
              <div>
                <q-badge
                  :class="
                    props.value === 'Open'
                      ? 'status-open'
                      : 'bg-white text-black' && props.value === 'Closed'
                      ? 'status-close '
                      : 'bg-white text-black' && props.value === 'Replied'
                      ? 'status-replied '
                      : 'bg-white text-black' && props.value === 'Pending'
                      ? 'status-pending'
                      : 'bg-white text-black'
                  "
                  :label="props.value"
                ></q-badge>
              </div>
            </q-td>
          </template>
        </q-table>
      </q-responsive>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { GetTickets, GetTicketDetails } from "src/services/Tickets";
export default {
  data() {
    return {
      separator: ref("cell"),
      columns: [
        {
          name: "Id",
          required: true,
          label: "ID",
          align: "center",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "subject",
          align: "center",
          label: "Subject",
          field: "subject",
          sortable: true,
        },

        {
          name: "createdDate",
          label: "CreatedDate",
          field: "createdDate",
          sortable: true,
          align: "center",
        },
        {
          name: "lastReplyDate",
          label: "LastReplyDate",
          field: "lastReplyDate",
          sortable: true,
          align: "center",
        },
        {
          name: "closedDate",
          label: "ClosedDate",
          field: "closedDate",
          sortable: true,
          align: "center",
        },

        {
          name: "priority",
          label: "Priority",
          field: "priority",
          sortable: true,
          align: "center",
        },
        {
          name: "statusId",
          label: "StatusId",
          field: "statusId",
          sortable: true,
          align: "center",
        },
        {
          name: "lastReplyByEnglish",
          label: "LastReplyByEnglish",
          field: "lastReplyByEnglish",
          sortable: true,
          align: "center",
        },
        {
          name: "details",
          label: "Details",
          field: "details",
          sortable: true,
          align: "center",
        },
      ],
      rows: [],
    };
  },
  methods: {
    GetDetails() {
      this.$router.push("/Details");
    },
  },
  mounted() {
    this.rows = GetTickets();
  },
};
</script>
<style scoped>
.form {
  background-color: gray;
  color: white;
}

.bgnumber {
  background-color: aqua;
}
.borderForms {
  border: 1px solid black;
}

.priority-high {
  color: white;
  background-color: red;
}
.priority-medium {
  color: white;
  background-color: rgb(221, 197, 87);
}
.priority-low {
  color: white;
  background-color: green;
}
.status-close {
  color: white;
  background-color: red;
}
.status-open {
  color: white;
  background-color: green;
}
.status-replied {
  color: white;
  background-color: rgb(0, 140, 255);
}
.status-pending {
  color: white;
  background-color: black;
}
.sdd {
  background-color: #6147d4;
  color: white;
  font-size: 15px;
}
.pontr {
  cursor: pointer;
}
.badge-clor {
  color: white;
  background-color: transparent;
}
</style>
